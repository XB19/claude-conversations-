# DSC 423 — Chapitre 2 — Script de narration (Colossyan)

Total : 1778 mots, soit environ 12 à 14 minutes.

## Slide 1 (82 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre deux du cours DSC quatre cent vingt-trois, consacré à la régression simple et multiple. Ce chapitre est au coeur du cours. Nous allons formaliser le modèle de régression linéaire, apprendre à l'estimer par la méthode des moindres carrés ordinaires, et interpréter ses coefficients. Nous verrons aussi les hypothèses classiques de Gauss-Markov, la qualité d'ajustement avec le R deux et le R deux ajusté, et enfin les tests d'hypothèse sur les coefficients.

## Slide 2 (86 mots)

Voici les objectifs de ce chapitre. Vous saurez formaliser le modèle de régression linéaire simple et multiple, et estimer ses paramètres par les moindres carrés ordinaires. Vous saurez interpréter les coefficients dans leur contexte, et vous maîtriserez les hypothèses du théorème de Gauss-Markov. Vous évaluerez la qualité d'un modèle avec le R deux et le R deux ajusté. Vous réaliserez des tests sur les coefficients et construirez des intervalles de confiance. Enfin, vous mettrez tout cela en oeuvre sur des données réelles, avec un logiciel statistique.

## Slide 3 (94 mots)

La régression linéaire simple modélise la relation entre une variable dépendante Y et une seule variable explicative X, en supposant que cette relation est linéaire. Le modèle s'écrit, Y i égale bêta zéro plus bêta un fois X i, plus epsilon i. Y i et X i sont les valeurs observées pour l'individu i. Bêta zéro est l'ordonnée à l'origine, la valeur de Y lorsque X vaut zéro. Bêta un est la pente, la variation de Y quand X augmente d'une unité. Et epsilon i est le terme d'erreur, ce que X n'explique pas.

## Slide 4 (84 mots)

Géométriquement, la régression simple revient à ajuster une droite au nuage de points. Bêta zéro fixe la position de la droite, et bêta un fixe sa pente. Prenons un exemple. On veut expliquer le poids d'une personne en fonction de sa taille. Le modèle, poids égale bêta zéro plus bêta un fois la taille, plus une erreur, ajuste une droite qui résume la tendance générale. La question devient alors, en moyenne, combien de kilos supplémentaires correspondent à un centimètre de taille en plus ?

## Slide 5 (91 mots)

Comment choisir la meilleure droite ? La méthode des moindres carrés ordinaires, notée MCO, choisit les coefficients qui minimisent la somme des carrés des résidus, c'est-à-dire la somme des carrés des écarts entre valeurs observées et valeurs prédites. En annulant les dérivées partielles, on obtient deux formules. La pente estimée est la covariance entre X et Y, divisée par la variance de X. Et l'ordonnée à l'origine estimée est la moyenne de Y, moins la pente multipliée par la moyenne de X. La droite passe donc toujours par le point moyen.

## Slide 6 (84 mots)

Pourquoi les moindres carrés ordinaires sont-ils si utilisés ? Grâce au théorème de Gauss-Markov. Sous les hypothèses classiques, les estimateurs MCO sont dits BLUE, c'est-à-dire les meilleurs estimateurs linéaires sans biais. Sans biais signifie qu'en moyenne, ils retrouvent les vraies valeurs des paramètres. Variance minimale signifie que, parmi tous les estimateurs linéaires sans biais, ce sont les plus précis. Ils sont donc optimaux dans leur catégorie. Attention, cette optimalité n'est garantie que si les hypothèses classiques sont respectées. Sinon, d'autres méthodes peuvent être préférables.

## Slide 7 (86 mots)

Interprétons maintenant les coefficients. Bêta un chapeau, la pente estimée, représente la variation moyenne de Y lorsque X augmente d'une unité. Par exemple, dans le modèle du poids en fonction de la taille, une pente de zéro virgule sept signifie qu'un centimètre de plus est associé, en moyenne, à zéro virgule sept kilo de plus. Bêta zéro chapeau est la valeur prédite quand X vaut zéro, souvent sans sens pratique, comme une taille nulle. Et surtout, retenez que la régression mesure une association, pas une causalité.

## Slide 8 (87 mots)

La régression multiple permet d'inclure plusieurs variables explicatives. Le modèle s'écrit, Y i égale bêta zéro, plus bêta un fois X un i, plus bêta deux fois X deux i, et ainsi de suite jusqu'à bêta k fois X k i, plus l'erreur. Ici, k est le nombre de variables explicatives. Chaque coefficient bêta j mesure l'effet de la variable X j sur Y, toutes choses égales par ailleurs, c'est-à-dire en contrôlant pour les autres variables. C'est ce qui rend la régression multiple si puissante en pratique.

## Slide 9 (87 mots)

Pour simplifier les notations et les calculs, on utilise l'écriture matricielle. Le modèle devient, Y égale X fois bêta, plus epsilon. Y est le vecteur des n observations. X est la matrice des variables explicatives, avec une première colonne de uns pour l'ordonnée à l'origine. Bêta est le vecteur des coefficients, et epsilon le vecteur des erreurs. L'estimateur MCO s'écrit alors, bêta chapeau égale l'inverse de X transposée X, multiplié par X transposée Y. Cette formule permet de traiter des modèles comptant un grand nombre de variables.

## Slide 10 (98 mots)

Dans un modèle multiple, chaque coefficient mesure un effet marginal, en maintenant toutes les autres variables constantes. Prenons le modèle, poids égale bêta zéro, plus bêta un fois la taille, plus bêta deux fois l'âge. Ici, bêta un est l'effet de la taille sur le poids, à âge égal. Si bêta un chapeau vaut zéro virgule six, alors pour deux personnes du même âge, un centimètre de différence de taille est associé à zéro virgule six kilo de différence de poids, en moyenne. Quiz, pourquoi ce coefficient diffère-t-il de la régression simple ? Parce qu'on contrôle maintenant l'âge.

## Slide 11 (89 mots)

Pour que les estimateurs MCO soient BLUE, cinq hypothèses doivent être vérifiées. Premièrement, la linéarité de la relation entre Y et les X. Deuxièmement, l'espérance des erreurs est nulle. Troisièmement, l'homoscédasticité, la variance des erreurs est constante, égale à sigma deux. Quatrièmement, les erreurs sont indépendantes entre elles. Cinquièmement, il n'y a pas de multicolinéarité parfaite. Notez que la normalité des erreurs n'est pas requise pour Gauss-Markov, mais elle l'est pour les tests et les intervalles en petit échantillon. En grand échantillon, le théorème central limite prend le relais.

## Slide 12 (94 mots)

Comment mesurer la qualité d'ajustement ? Avec le coefficient de détermination, le R deux. Il mesure la proportion de la variance de Y expliquée par le modèle. On décompose la somme des carrés totale, qui représente la variance totale de Y, en une somme des carrés expliquée par la régression, et une somme des carrés des erreurs, la variance résiduelle. Le R deux est le rapport entre la part expliquée et le total. Proche de un, le modèle explique beaucoup. Mais attention, le R deux augmente toujours quand on ajoute des variables, même inutiles.

## Slide 13 (96 mots)

C'est pourquoi on utilise le R deux ajusté. Il corrige le R deux en tenant compte du nombre de variables. Sa formule est, un moins, un moins R deux, multiplié par n moins un, divisé par n moins k moins un, où n est le nombre d'observations et k le nombre de variables explicatives. Le R deux ajusté n'augmente que si la nouvelle variable apporte une amélioration réelle. Il pénalise donc les variables inutiles. Retenez cette règle, pour comparer des modèles de tailles différentes, utilisez toujours le R deux ajusté, et non le R deux simple.

## Slide 14 (85 mots)

Passons aux tests sur les coefficients. Le test t vérifie si un coefficient bêta j est significativement différent de zéro. L'hypothèse nulle dit que bêta j est nul, la variable n'a pas d'effet sur Y, en contrôlant pour les autres. L'hypothèse alternative dit qu'il est différent de zéro. La statistique de test est le coefficient estimé, divisé par son erreur standard. On rejette l'hypothèse nulle si la p-value est inférieure au seuil alpha, souvent cinq pour cent. On dit alors que la variable est significative.

## Slide 15 (98 mots)

On peut aussi construire un intervalle de confiance pour chaque coefficient. Il est égal au coefficient estimé, plus ou moins un quantile de Student à n moins k moins un degrés de liberté, multiplié par l'erreur standard. Si l'intervalle ne contient pas zéro, le coefficient est significatif au seuil choisi. Quant à la p-value, plus elle est faible, plus les preuves contre l'hypothèse nulle sont fortes. En dessous de zéro virgule zéro cinq, la preuve est modérée. En dessous de zéro virgule zéro un, elle est forte. Et en dessous de zéro virgule zéro zéro un, très forte.

## Slide 16 (87 mots)

Le test F global vérifie si tous les coefficients, sauf l'ordonnée à l'origine, sont simultanément nuls. L'hypothèse nulle dit que bêta un, bêta deux, jusqu'à bêta k valent tous zéro. L'hypothèse alternative dit qu'au moins un coefficient est non nul. La statistique F provient de l'analyse de la variance, et mesure si le modèle explique une part significative de la variance de Y. Un F élevé, avec une p-value faible, indique que le modèle est globalement significatif. Nous détaillerons ce test au chapitre six, consacré à l'ANOVA.

## Slide 17 (88 mots)

Passons à la pratique avec R. On charge d'abord les données avec read csv. Pour une régression simple, on utilise la fonction lm, pour linear model, avec la formule Y tilde X, puis on affiche les résultats avec summary. Pour une régression multiple, on ajoute simplement les variables dans la formule, Y tilde X un plus X deux plus X trois. La fonction coef extrait les coefficients, et confint donne les intervalles de confiance, ici au niveau quatre-vingt-quinze pour cent. En quelques lignes, tout le modèle est estimé.

## Slide 18 (83 mots)

Avec Python, on utilise pandas et statsmodels. On charge les données avec read csv. On sélectionne les variables explicatives X un, X deux et X trois, puis on ajoute une constante avec add constant, pour inclure l'ordonnée à l'origine. C'est un oubli fréquent, alors soyez vigilants. On définit ensuite Y, puis on estime le modèle avec OLS, pour ordinary least squares, suivi de fit. La fonction summary affiche le tableau complet des résultats, et conf int donne les intervalles de confiance des coefficients.

## Slide 19 (90 mots)

Que contiennent les sorties logicielles ? D'abord les coefficients estimés, les valeurs de chaque paramètre. Ensuite les erreurs standards, qui mesurent la précision de chaque estimateur. Puis les statistiques t et les p-values, pour tester la significativité individuelle de chaque coefficient. On trouve aussi le R deux et le R deux ajusté, la proportion de variance expliquée. Et enfin la statistique F et sa p-value, pour le test global du modèle. Apprenez à lire ce tableau dans cet ordre, du global vers le détail, pour interpréter vos résultats avec méthode.

## Slide 20 (89 mots)

Résumons ce chapitre. La régression simple modélise la relation linéaire entre Y et une variable X. La régression multiple l'étend à plusieurs variables, et ses coefficients sont des effets marginaux, toutes choses égales par ailleurs. Les moindres carrés ordinaires minimisent la somme des carrés des résidus, et donnent des estimateurs BLUE sous Gauss-Markov. Le R deux ajusté est préférable pour comparer des modèles. Les tests t et les p-values évaluent chaque coefficient. Et R ou Python permettent de tout mettre en oeuvre. Au prochain chapitre, nous étudierons la corrélation.
