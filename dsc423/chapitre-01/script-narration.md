# DSC 423 — Chapitre 1 — Script de narration (Colossyan)

Total : 1850 mots, soit environ 12 à 14 minutes.

## Slide 1 (81 mots)

Bonjour à toutes et à tous, et bienvenue dans le cours DSC quatre cent vingt-trois, consacré à l'analyse des données et à la régression. Ce premier chapitre est une introduction à l'analyse de données, et une révision des bases statistiques. Avant de construire des modèles, nous devons nous assurer que les outils fondamentaux sont bien en place, comme la moyenne, la variance, les intervalles de confiance ou les tests d'hypothèse. Nous terminerons par une première prise en main d'un logiciel statistique.

## Slide 2 (83 mots)

Voici les objectifs d'apprentissage de ce chapitre. À la fin, vous serez capables de comprendre la structure et les objectifs du cours. Vous aurez réactivé vos connaissances en statistiques descriptives et inférentielles. Vous maîtriserez les notions de moyenne, de variance, d'écart-type, de quantiles, d'intervalles de confiance et de tests d'hypothèse. Vous comprendrez la démarche de modélisation statistique. Et enfin, vous saurez importer et explorer des données avec un logiciel comme R, Python, SAS ou SPSS. Commençons sans attendre par la présentation du cours.

## Slide 3 (83 mots)

Pourquoi étudier l'analyse de données et la régression ? Nous vivons à l'ère des données. Chaque jour, des milliards d'informations sont produites, transactions bancaires, clics sur internet, données médicales ou mesures environnementales. Mais ces données sont brutes, massives et souvent désordonnées. L'analyse de données consiste à les transformer en informations utiles pour décider. La régression permet de quantifier les relations entre variables. Par exemple, un économiste étudie l'effet du prix sur la demande, ou une entreprise prévoit ses ventes selon ses dépenses publicitaires.

## Slide 4 (89 mots)

Voyons la structure du cours, organisé sur douze semaines. Les semaines un à trois posent les fondements de la régression et de la corrélation. Les semaines quatre et cinq portent sur la construction, la validation et le diagnostic des modèles. Les semaines sept et huit traitent de la comparaison de modèles et de l'analyse de la variance. La semaine neuf aborde les techniques de robustesse. Les semaines dix et onze sont consacrées aux logiciels avancés et au projet pratique. Enfin, la semaine douze accueille l'examen final et les présentations.

## Slide 5 (85 mots)

Passons aux modalités d'évaluation. Les travaux pratiques et études de cas comptent pour trente-cinq pour cent, avec une mise en application sur des données réelles. Les contrôles continus, sous forme de quiz, comptent pour quinze pour cent. Le projet d'analyse statistique, qui porte sur un jeu de données complet, vaut vingt pour cent. L'examen de mi-parcours, en semaine six, et l'examen final, en semaine douze, comptent chacun pour quinze pour cent. Retenez surtout que ce cours est résolument pratique, chaque notion sera appliquée sur logiciel.

## Slide 6 (83 mots)

Commençons notre révision par les statistiques descriptives. Avant de construire des modèles complexes, il est essentiel de savoir résumer et visualiser les données. Les statistiques descriptives permettent justement de synthétiser l'information contenue dans un ensemble de données, à l'aide de quelques indicateurs et de graphiques bien choisis. C'est toujours la première étape d'une analyse sérieuse. Sans elle, on risque de modéliser des données que l'on ne comprend pas, et de passer à côté d'erreurs ou de valeurs anormales. Voyons donc les principaux indicateurs.

## Slide 7 (82 mots)

Les mesures de tendance centrale donnent une valeur typique de la distribution. La moyenne est la somme des valeurs divisée par le nombre d'observations. Elle est sensible aux valeurs extrêmes, un salaire très élevé suffit à la tirer vers le haut. La médiane partage la distribution en deux moitiés égales, cinquante pour cent des valeurs en dessous, cinquante pour cent au-dessus. Elle est robuste aux valeurs extrêmes. Enfin, le mode est la valeur la plus fréquente, utile surtout pour les variables catégorielles.

## Slide 8 (86 mots)

Les mesures de dispersion décrivent la variabilité des données autour du centre. La variance mesure la moyenne des écarts au carré par rapport à la moyenne, et l'écart-type en est la racine carrée. Plus l'écart-type est grand, plus les données sont dispersées. L'intervalle interquartile est la différence entre le troisième et le premier quartile. Il mesure la dispersion des cinquante pour cent centraux, et résiste bien aux valeurs extrêmes. Enfin, les quantiles découpent la distribution en parties égales, comme les quartiles, les déciles et les percentiles.

## Slide 9 (80 mots)

La visualisation est une étape cruciale de l'exploration. L'histogramme montre la distribution d'une variable quantitative. La boîte à moustaches résume cinq nombres, le minimum, le premier quartile, la médiane, le troisième quartile et le maximum, et elle fait apparaître les valeurs aberrantes. Le nuage de points montre la relation entre deux variables quantitatives, c'est le graphique de base de la régression. Et le diagramme en barres représente une variable catégorielle. Retenez ce conseil, avant de modéliser, visualisez toujours vos données.

## Slide 10 (82 mots)

Passons maintenant aux statistiques inférentielles. Leur objectif est de tirer des conclusions sur une population entière, à partir d'un échantillon seulement. C'est le fondement même de la science statistique. En pratique, on ne peut presque jamais observer toute la population, parce que ce serait trop coûteux, trop long, ou tout simplement impossible. On observe donc un échantillon, et l'on utilise les outils de l'inférence pour généraliser les résultats, tout en mesurant l'incertitude liée à cette généralisation. Commençons par le vocabulaire de base.

## Slide 11 (84 mots)

Précisons le vocabulaire. La population est l'ensemble complet des individus ou objets étudiés. L'échantillon est le sous-ensemble que l'on observe effectivement. Un paramètre est une valeur numérique qui décrit la population, par exemple la vraie moyenne, notée mu. Une statistique est une valeur calculée sur l'échantillon, par exemple la moyenne observée, notée x barre, qui sert à estimer le paramètre. Petit quiz, la moyenne de vos cent clients interrogés est-elle un paramètre ou une statistique ? C'est une statistique, car elle provient d'un échantillon.

## Slide 12 (84 mots)

Un intervalle de confiance donne une fourchette de valeurs dans laquelle on estime que le paramètre se situe, avec un niveau de confiance fixé, généralement quatre-vingt-quinze pour cent. Pour la moyenne, lorsque l'écart-type de la population est inconnu, on prend la moyenne de l'échantillon, plus ou moins un quantile de la loi de Student multiplié par l'écart-type divisé par la racine de n. Attention à l'interprétation. Si l'on répétait l'échantillonnage de nombreuses fois, quatre-vingt-quinze pour cent des intervalles ainsi construits contiendraient la vraie moyenne.

## Slide 13 (87 mots)

Un test d'hypothèse suit cinq étapes. D'abord, formuler l'hypothèse nulle, que l'on cherche à rejeter, et l'hypothèse alternative, que l'on veut démontrer. Ensuite, choisir un seuil de signification alpha, généralement cinq pour cent. Puis calculer la statistique de test, selon le test utilisé, comme le test de Student ou le test du khi deux. On calcule ensuite la p-value, la probabilité d'observer un résultat aussi extrême si l'hypothèse nulle est vraie. Enfin, on conclut. Si la p-value est inférieure ou égale à alpha, on rejette l'hypothèse nulle.

## Slide 14 (90 mots)

Tout test comporte un risque d'erreur. L'erreur de type un, ou faux positif, consiste à rejeter l'hypothèse nulle alors qu'elle est vraie. Son risque est alpha. L'erreur de type deux, ou faux négatif, consiste à ne pas rejeter l'hypothèse nulle alors qu'elle est fausse. Son risque est bêta. La puissance du test, égale à un moins bêta, est la probabilité de rejeter à juste titre l'hypothèse nulle. Quiz, un test médical qui déclare malade une personne saine commet quelle erreur ? Une erreur de type un, c'est un faux positif.

## Slide 15 (88 mots)

Abordons maintenant la démarche de modélisation. Un modèle statistique est une représentation simplifiée d'une réalité complexe. Il exprime la relation entre une variable d'intérêt, la variable dépendante, notée Y, et une ou plusieurs variables explicatives, notées X. Le modèle comporte aussi une composante aléatoire, l'erreur, qui représente tout ce que les variables explicatives ne permettent pas d'expliquer. Aucun modèle n'est parfait, mais un bon modèle est suffisamment simple pour être compris, et suffisamment fidèle pour être utile. Voyons maintenant comment on construit un tel modèle, étape par étape.

## Slide 16 (84 mots)

La modélisation suit sept étapes. On formule d'abord la question de recherche, par exemple, le prix d'une maison dépend-il de sa superficie, de son âge et de son emplacement ? On choisit ensuite les variables. Puis on collecte et on prépare les données, en traitant les valeurs manquantes, les doublons et les erreurs. On choisit le type de modèle, on l'estime, souvent par les moindres carrés ordinaires, puis on le valide par l'analyse des résidus. Enfin, on interprète et on communique les résultats clairement.

## Slide 17 (83 mots)

La régression linéaire repose sur cinq hypothèses clés, que nous vérifierons en détail plus tard. La linéarité, la relation entre Y et les X est linéaire. L'indépendance, les erreurs sont indépendantes les unes des autres. L'homoscédasticité, la variance des erreurs est constante. La normalité, les erreurs suivent une loi normale. Et l'absence de multicolinéarité, les variables explicatives ne sont pas trop corrélées entre elles. Retenez bien ces cinq hypothèses. Si ces hypothèses ne sont pas respectées, les conclusions du modèle peuvent être trompeuses.

## Slide 18 (82 mots)

Pour ce cours, vous choisirez un logiciel statistique parmi quatre. R est gratuit, très puissant, et soutenu par une large communauté, on l'utilise avec RStudio. Python est gratuit et polyvalent, très utilisé en science des données avec les bibliothèques pandas, statsmodels et scikit-learn. SAS est utilisé en entreprise et performant sur les grandes bases de données. SPSS offre une interface graphique, appréciée en sciences sociales. Nous recommandons vivement R, pour sa gratuité, sa puissance, et ses nombreux packages dédiés à la régression.

## Slide 19 (87 mots)

Voyons l'installation. Avec R, téléchargez d'abord R sur le site du CRAN, puis RStudio. En ouvrant RStudio, vous verrez quatre fenêtres, la console, l'environnement, l'historique, et une fenêtre regroupant fichiers, graphiques et aide. Avec Python, le plus simple est d'installer Anaconda, qui contient Python, Jupyter Notebook et les principales bibliothèques. Ouvrez ensuite Jupyter Notebook ou JupyterLab pour écrire votre code. Je vous conseille de faire cette installation dès maintenant, pour être prêts pour les prochains travaux pratiques. En cas de difficulté, n'hésitez pas à demander de l'aide.

## Slide 20 (83 mots)

Pour importer des données, avec R, on utilise la fonction read csv, en indiquant le chemin du fichier et la présence d'une ligne d'en-tête. La fonction head affiche les premières lignes, str montre la structure des données, et summary donne un résumé statistique. Avec Python, on importe pandas, puis on utilise read csv. Ensuite, head affiche les premières lignes, info décrit les variables, et describe fournit le résumé statistique. Ces quelques commandes sont les premières à lancer sur tout nouveau jeu de données.

## Slide 21 (83 mots)

Voici quelques commandes essentielles pour explorer un jeu de données. Pour connaître les dimensions, on utilise dim en R, et shape en Python. Pour lister les noms des variables, names en R, et columns en Python. Pour visualiser, R propose hist pour l'histogramme, boxplot pour la boîte à moustaches, et plot pour le nuage de points. En Python, on dispose de hist, de boxplot, et de scatter avec matplotlib. Entraînez-vous avec ces commandes sur un petit fichier, pour vous familiariser avec votre logiciel.

## Slide 22 (81 mots)

Résumons ce chapitre. Les statistiques descriptives, moyenne, écart-type et quartiles, résument les données. Les statistiques inférentielles, intervalles de confiance et tests d'hypothèse, permettent de généraliser de l'échantillon à la population. La modélisation suit des étapes structurées, de la question de recherche à l'interprétation. La régression linéaire repose sur des hypothèses qu'il faudra vérifier. Et la maîtrise d'un logiciel est indispensable pour travailler sur des données réelles. Merci pour votre attention. Dans le prochain chapitre, nous étudierons la régression simple et multiple.
