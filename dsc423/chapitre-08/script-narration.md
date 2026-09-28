# DSC 423 — Chapitre 8 — Script de narration (Colossyan)

Total : 2394 mots, soit environ 16 à 18 minutes.

## Slide 1 (84 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre huit du cours DSC quatre cent vingt-trois, consacré aux techniques de robustesse en régression. Nous ouvrons ici la quatrième partie du cours, dédiée à la robustesse et aux techniques avancées. Dans les chapitres précédents, nous avons appris à détecter les problèmes grâce à l'analyse des résidus. Dans ce chapitre, nous allons apprendre à les traiter, avec la régression robuste, les moindres carrés pondérés, les transformations de variables, et le traitement des points influents.

## Slide 2 (80 mots)

Voici les objectifs de ce chapitre. Vous comprendrez les limites des moindres carrés ordinaires face aux violations des hypothèses. Vous maîtriserez les M-estimateurs, c'est-à-dire le principe de la régression robuste et de la pondération des observations. Vous appliquerez les moindres carrés pondérés en cas d'hétéroscédasticité. Vous utiliserez les transformations de variables, comme Box-Cox ou le logarithme, pour stabiliser la variance ou linéariser une relation. Et vous traiterez les points influents, en comparant un modèle classique et un modèle robuste. Commençons.

## Slide 3 (81 mots)

Rappelons d'abord les hypothèses de Gauss-Markov. Sous ces hypothèses, les estimateurs des moindres carrés ordinaires sont BLUE, les meilleurs estimateurs linéaires sans biais. Il y a cinq hypothèses. Premièrement, la linéarité du modèle. Deuxièmement, l'espérance nulle des erreurs. Troisièmement, l'homoscédasticité, c'est-à-dire une variance constante des erreurs. Quatrièmement, l'indépendance des erreurs. Et cinquièmement, l'absence de multicolinéarité parfaite. La question de ce chapitre est simple. Que faire lorsque l'une de ces hypothèses n'est pas respectée ? Voyons cela en détail. C'est tout l'enjeu.

## Slide 4 (85 mots)

Que se passe-t-il en cas de violation ? Avec une non-linéarité, les estimations sont biaisées, le modèle ne capture pas la vraie relation. Avec l'hétéroscédasticité, les estimateurs restent sans biais, mais ne sont plus les plus efficaces, et surtout, leurs erreurs standards sont fausses, si bien que tests et intervalles deviennent invalides. Avec la non-normalité, le théorème central limite protège les grands échantillons, mais pas les petits. Les points influents peuvent changer radicalement les coefficients. Et l'autocorrélation fausse les erreurs standards, surtout en séries temporelles.

## Slide 5 (83 mots)

Pourquoi la robustesse est-elle si importante ? Pour quatre raisons. La fiabilité d'abord, un modèle robuste donne des résultats fiables même en présence de violations mineures des hypothèses. La généralisabilité ensuite, le modèle est moins sensible aux particularités de l'échantillon étudié. L'interprétation, car les coefficients sont plus stables, donc plus crédibles. Et enfin la prédiction, les prévisions sont plus solides sur de nouvelles données. En pratique, les données réelles sont rarement parfaites, d'où l'intérêt de disposer de méthodes qui résistent à leurs imperfections.

## Slide 6 (91 mots)

Découvrons les M-estimateurs, base de la régression robuste. Ils généralisent les moindres carrés. Au lieu de minimiser la somme des carrés des résidus, ils minimisent la somme d'une fonction rhô des résidus, qui pénalise moins lourdement les valeurs extrêmes. Avec les moindres carrés ordinaires, rhô est simplement le carré du résidu. Or, en élevant au carré, un résidu dix fois plus grand pèse cent fois plus. C'est ce qui rend les MCO si sensibles aux valeurs aberrantes. Les M-estimateurs remplacent donc cette fonction quadratique par une fonction de perte plus modérée.

## Slide 7 (92 mots)

Voici trois fonctions de perte courantes. La fonction de Huber combine une partie quadratique pour les petits résidus, et une partie linéaire au-delà d'un seuil c. C'est le compromis le plus utilisé. La fonction de Tukey, dite biweight, est plus sévère, les résidus trop grands sont carrément ignorés, car leur perte devient constante au-delà du seuil. Enfin, la perte L un minimise la somme des valeurs absolues des résidus. Elle est très robuste, mais moins efficace lorsque le bruit est normal. Quiz, laquelle ignore les très grands résidus ? Celle de Tukey.

## Slide 8 (83 mots)

Les M-estimateurs ont des avantages clairs. Ils réduisent l'influence des valeurs aberrantes, ils sont plus robustes que les moindres carrés ordinaires, et leurs coefficients sont plus stables. Mais ils ont aussi des limites. Le choix de la fonction de perte et de ses constantes, comme le paramètre c de Huber, reste subjectif. Il n'existe pas de tests d'hypothèse directs, même si certaines approches existent. Ils sont moins efficaces que les MCO quand les données sont propres. Et leur calcul, itératif, est plus coûteux.

## Slide 9 (85 mots)

Mettons cela en oeuvre avec R. On charge le package MASS, qui fournit la fonction rlm, pour robust linear model. Avec la méthode M, on obtient une régression robuste utilisant par défaut la fonction de Huber. Avec la méthode MM, on obtient un estimateur plus résistant, fondé sur la fonction bicarrée de Tukey. La fonction summary affiche les résultats. Pour comparer, on estime aussi le modèle classique avec lm. Si les coefficients diffèrent nettement, c'est le signe que des observations extrêmes influencent le modèle classique.

## Slide 10 (85 mots)

Avec Python, on utilise statsmodels. On construit la matrice X avec les variables X un, X deux et X trois, en ajoutant la constante avec add constant, puis on définit Y. On crée ensuite le modèle robuste avec la classe RLM, en précisant la norme de Huber, HuberT. La méthode fit estime le modèle, et summary affiche le tableau des résultats. On estime enfin le modèle classique avec OLS, pour comparer les deux. La démarche est exactement la même qu'en R, seule la syntaxe change.

## Slide 11 (85 mots)

Passons aux moindres carrés pondérés, notés WLS, pour weighted least squares. Lorsque la variance des erreurs n'est pas constante, on peut pondérer chaque observation par l'inverse de sa variance. On minimise alors la somme des résidus au carré, chacun multiplié par un poids w i, égal à un divisé par sigma i au carré. L'idée est intuitive. Les observations les plus précises, celles dont la variance est faible, reçoivent un poids plus élevé. Les observations les plus bruitées comptent moins. On corrige ainsi directement l'hétéroscédasticité.

## Slide 12 (84 mots)

Deux situations peuvent se présenter. Première situation, les variances sont connues. C'est le cas, par exemple, avec des données agrégées, où chaque observation est une moyenne accompagnée de son erreur standard. On peut alors calculer directement les poids. Deuxième situation, les variances sont inconnues, ce qui est le cas le plus fréquent. Il faut alors les estimer à partir des données, par exemple en régressant les carrés ou les valeurs absolues des résidus sur les variables explicatives. Nous allons voir ces deux cas successivement.

## Slide 13 (82 mots)

Premier cas, les variances sont connues. Exemple, dans une étude, chaque observation est une moyenne régionale, accompagnée de son écart-type. On pondère alors par l'inverse de la variance de chaque moyenne. Avec R, on calcule les poids comme un divisé par le carré des erreurs standards, puis on les passe à la fonction lm grâce à l'argument weights. Avec Python, on calcule les mêmes poids, puis on utilise la classe WLS de statsmodels, avec l'argument weights. Le reste de l'analyse est identique.

## Slide 14 (83 mots)

Deuxième cas, les variances sont inconnues. On les estime alors en plusieurs étapes. D'abord, on estime le modèle par les moindres carrés ordinaires, et l'on récupère les résidus. Ensuite, on régresse les résidus, en valeur absolue ou au carré, sur les variables explicatives, ce qui donne une estimation de la variance pour chaque observation. Enfin, on estime le modèle par les moindres carrés pondérés, avec des poids égaux à un sur la variance estimée. Cette approche s'appelle moindres carrés pondérés itératifs, ou faisables.

## Slide 15 (85 mots)

Voici le code R correspondant. Étape un, on estime le modèle MCO avec lm, et l'on extrait ses résidus avec residuals. Étape deux, on régresse la valeur absolue de ces résidus sur X un et X deux. Les valeurs ajustées de cette régression estiment l'écart-type de chaque erreur, et les poids sont égaux à un divisé par leur carré. Étape trois, on estime le modèle pondéré avec lm et l'argument weights. Attention, cette approche est utile, mais elle peut être instable avec de petits échantillons.

## Slide 16 (80 mots)

Voyons maintenant les transformations de variables. Pourquoi transformer ? Les transformations poursuivent quatre objectifs. Linéariser la relation entre Y et X, lorsque celle-ci est courbe. Stabiliser la variance, c'est-à-dire corriger l'hétéroscédasticité. Normaliser la distribution des erreurs, lorsqu'elle est asymétrique. Et réduire l'influence des valeurs aberrantes, en resserrant les valeurs extrêmes. Une seule transformation bien choisie peut souvent régler plusieurs problèmes à la fois, ce qui en fait un outil particulièrement puissant et économique. Voyons les transformations les plus utilisées. Allons-y.

## Slide 17 (83 mots)

Voici les transformations les plus courantes. Le logarithme convient aux données dont la variance augmente avec Y, comme une croissance exponentielle. La racine carrée convient aux données de comptage, comme un nombre d'événements. L'inverse convient aux relations inverses. La puissance lambda correspond à la famille de Box-Cox, qui généralise les précédentes. Enfin, la transformation logistique, le logarithme de Y sur un moins Y, s'applique aux proportions comprises entre zéro et un. Quiz, pour un nombre de pannes par mois ? La racine carrée.

## Slide 18 (83 mots)

La transformation de Box-Cox est une famille paramétrique qui généralise toutes ces transformations. Pour un lambda non nul, on calcule Y puissance lambda, moins un, divisé par lambda. Pour lambda égal à zéro, on prend le logarithme de Y. Quelques cas particuliers sont à retenir. Lambda égal à un, pas de transformation. Lambda égal à zéro, le logarithme. Lambda égal à zéro virgule cinq, la racine carrée. Et lambda égal à moins un, l'inverse. On choisit lambda pour maximiser la vraisemblance du modèle.

## Slide 19 (92 mots)

Pour appliquer Box-Cox avec R, on utilise la fonction boxcox du package MASS, appliquée au modèle MCO, en testant les valeurs de lambda de moins deux à deux, par pas de zéro virgule un. Elle trace un graphique de la vraisemblance, avec un intervalle de confiance pour lambda. On choisit la valeur qui maximise la vraisemblance. Si elle est proche de zéro, on utilise simplement le logarithme de Y. Avec Python, la fonction boxcox de scipy transforme Y et renvoie le lambda optimal. On estime ensuite le modèle sur la variable transformée.

## Slide 20 (80 mots)

Quand faut-il transformer ? Commencez toujours par visualiser les données et les résidus, avant toute décision. Transformez si les diagnostics révèlent des problèmes réels, non-linéarité, hétéroscédasticité ou non-normalité. En revanche, ne transformez pas si les problèmes sont mineurs, ou si l'interprétation devient trop difficile. Car les transformations compliquent l'interprétation. Par exemple, avec le logarithme de Y, un coefficient de zéro virgule un signifie qu'une augmentation d'une unité de X est associée à environ dix pour cent de hausse de Y.

## Slide 21 (86 mots)

Revenons aux points influents, et rappelons les trois outils de détection vus au chapitre cinq. Le levier, h i i, mesure l'éloignement d'une observation sur les variables explicatives. Le résidu studentisé, r i, mesure à quel point l'observation est mal ajustée par le modèle. Et la distance de Cook, D i, combine le levier et le résidu pour mesurer l'influence globale de l'observation sur les coefficients. Ces trois indicateurs sont complémentaires. Une observation n'est vraiment préoccupante que lorsqu'elle est à la fois éloignée et mal ajustée.

## Slide 22 (88 mots)

Une fois les points influents identifiés, cinq options s'offrent à vous. Un, vérifier les données, y a-t-il une erreur de saisie ou une mesure aberrante ? Si oui, corriger ou supprimer. Deux, conserver l'observation avec prudence, car elle peut être légitime mais extrême, et le modèle doit alors y être robuste. Trois, transformer les variables, par exemple avec un logarithme. Quatre, utiliser la régression robuste, qui réduit naturellement leur influence. Et cinq, supprimer l'observation si elle est erronée ou provient d'une autre population, en justifiant toujours ce choix.

## Slide 23 (94 mots)

Il est très utile de comparer le modèle avec et sans les points influents. Avec R, on calcule la distance de Cook avec cooks distance, puis on fixe un seuil, ici quatre divisé par n moins k moins un. La fonction which repère les observations qui dépassent ce seuil. On estime ensuite le modèle sans ces observations, puis on compare les coefficients des deux modèles avec la fonction coef. Si les coefficients changent beaucoup, les points influents ont un impact fort. Il faut alors les conserver avec une méthode robuste, ou justifier leur exclusion.

## Slide 24 (90 mots)

Voici une synthèse pratique avec R, sur les données mtcars. On estime d'abord un modèle MCO, qui explique la consommation par le poids, la puissance et le nombre de cylindres. Puis deux régressions robustes avec rlm, l'une avec la méthode M, de Huber, l'autre avec la méthode MM. On applique ensuite boxcox pour choisir lambda, et l'on estime un modèle sur le logarithme de la consommation. Enfin, on trace un diagramme en barres des distances de Cook, avec une ligne rouge au niveau du seuil, pour repérer les points influents.

## Slide 25 (84 mots)

Et voici la même synthèse avec Python. On importe pandas, numpy, statsmodels, scipy et matplotlib, puis on charge les données mtcars. On estime le modèle MCO avec OLS, puis la régression robuste avec RLM et la norme de Huber. La fonction boxcox de scipy transforme la consommation et donne le lambda optimal, et l'on réestime le modèle sur la variable transformée. Enfin, la méthode get influence fournit les distances de Cook, que l'on représente en barres, avec une ligne pointillée rouge pour le seuil.

## Slide 26 (90 mots)

Passons à l'étude de cas, avec Boston Housing. On compare quatre approches sur le même modèle, qui explique le prix médian par le taux de criminalité, le nombre de pièces, l'âge, le statut socio-économique, le ratio élèves par enseignant et la taxe. D'abord les moindres carrés ordinaires. Ensuite la régression robuste de Huber. Puis la transformation de Box-Cox. Le lambda optimal vaut environ zéro virgule quinze, proche de zéro, on utilise donc le logarithme du prix. Enfin, les moindres carrés pondérés, avec des poids estimés. On compare ensuite les coefficients.

## Slide 27 (90 mots)

Analysons les différences. Avec les MCO, les coefficients sont sensibles aux valeurs extrêmes, et le RMSE en validation croisée est le plus élevé. La régression robuste de Huber donne des coefficients proches mais plus stables, et un RMSE plus faible, c'est un bon compromis. Box-Cox, sur le logarithme de Y, linéarise la relation et stabilise la variance, avec des effets interprétés en pourcentage. Les moindres carrés pondérés corrigent la variance non constante. Décision finale, on retiendra le modèle Box-Cox ou le modèle robuste, le premier étant plus facile à interpréter.

## Slide 28 (86 mots)

Résumons ce chapitre. Les moindres carrés ordinaires sont sensibles aux violations des hypothèses, notamment à l'hétéroscédasticité et aux points influents. Les M-estimateurs réduisent l'influence des valeurs aberrantes, grâce à une fonction de perte moins sensible. Les moindres carrés pondérés sont utiles lorsque la variance des erreurs est connue ou peut être estimée. Les transformations, comme Box-Cox ou le logarithme, linéarisent la relation et stabilisent la variance. La détection des points influents est essentielle. Et comparer modèles classiques et robustes permet de choisir l'approche la plus fiable.
