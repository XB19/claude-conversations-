# DSC 423 — Chapitre 3 — Script de narration (Colossyan)

Total : 1815 mots, soit environ 12 à 14 minutes.

## Slide 1 (83 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre trois du cours DSC quatre cent vingt-trois, consacré à la corrélation et à son interprétation. Ce chapitre clôt la première partie du cours, qui couvre les semaines un à trois. Nous allons apprendre à mesurer la force d'une relation entre deux variables, à la visualiser, et surtout à l'interpréter avec prudence. Nous verrons aussi un problème très fréquent en régression, la multicolinéarité, et la manière de la détecter. Commençons tout de suite.

## Slide 2 (85 mots)

Voici les objectifs de ce chapitre. Vous saurez calculer et interpréter le coefficient de corrélation de Pearson. Vous saurez construire et lire une matrice de corrélation. Vous visualiserez les relations entre variables, grâce aux graphiques de dispersion et aux corrélogrammes. Vous distinguerez clairement corrélation et causalité, une compétence essentielle. Vous détecterez et analyserez la multicolinéarité à l'aide du VIF. Et enfin, vous appliquerez ces notions à des jeux de données multivariés, avec votre logiciel statistique habituel. Ces compétences vous serviront dans tous les chapitres suivants.

## Slide 3 (90 mots)

Le coefficient de corrélation de Pearson, noté r, mesure la force et le sens de la relation linéaire entre deux variables quantitatives X et Y. Il est toujours compris entre moins un et plus un. Quand r vaut plus un, la corrélation linéaire est positive et parfaite, les points sont alignés sur une droite croissante. Quand r vaut moins un, elle est négative et parfaite, sur une droite décroissante. Et quand r vaut zéro, il n'y a aucune corrélation linéaire, les points ne montrent pas de tendance en ligne droite.

## Slide 4 (89 mots)

Voyons la formule. Le coefficient de Pearson est égal à la somme des produits des écarts à la moyenne de X et de Y, divisée par la racine du produit des sommes des carrés de ces écarts. De manière équivalente, r est la covariance entre X et Y, divisée par le produit de leurs écarts-types. Cette normalisation a une conséquence importante. Le coefficient de corrélation est sans unité. Il ne dépend pas des unités de mesure, que la taille soit exprimée en centimètres ou en mètres, r reste identique.

## Slide 5 (87 mots)

Comment juger la force d'une corrélation ? On utilise des règles empiriques, sur la valeur absolue de r. Entre zéro et zéro virgule dix-neuf, la corrélation est très faible ou nulle. Entre zéro virgule vingt et zéro virgule trente-neuf, elle est faible. Entre zéro virgule quarante et zéro virgule cinquante-neuf, modérée. Entre zéro virgule soixante et zéro virgule soixante-dix-neuf, forte. Et au-delà de zéro virgule quatre-vingts, très forte. Ces seuils restent indicatifs, et dépendent du domaine. En physique ou en sciences sociales, les attentes sont très différentes.

## Slide 6 (89 mots)

Une corrélation observée sur un échantillon peut être due au hasard. On la teste donc. L'hypothèse nulle dit que la corrélation rhô dans la population est nulle. L'hypothèse alternative dit qu'elle est différente de zéro. La statistique de test est r multiplié par la racine de n moins deux, divisé par la racine de un moins r au carré. Elle suit une loi de Student à n moins deux degrés de liberté. Si la p-value est inférieure à zéro virgule zéro cinq, la corrélation est significativement différente de zéro.

## Slide 7 (92 mots)

Quand on dispose de plusieurs variables quantitatives, on calcule toutes les corrélations deux à deux, et on les range dans une matrice de corrélation. Par exemple, pour trois variables X un, X deux et X trois, la case de la ligne i et de la colonne j contient la corrélation entre X i et X j. Cette matrice a deux propriétés. Elle est symétrique, puisque la corrélation entre X un et X deux est la même que celle entre X deux et X un. Et sa diagonale ne contient que des uns.

## Slide 8 (90 mots)

Le graphique de dispersion est l'outil de base. Il montre la direction de la relation, croissante ou décroissante, et sa force, plus les points sont alignés, plus la corrélation est forte. Il révèle aussi les relations non linéaires, qu'une corrélation proche de zéro peut masquer, et les valeurs aberrantes qui faussent le coefficient. L'exemple célèbre du quartet d'Anscombe le montre bien. Quatre jeux de données ont la même corrélation, zéro virgule huit cent seize, et la même droite de régression, mais des formes totalement différentes. Visualisez donc toujours vos données.

## Slide 9 (80 mots)

Le corrélogramme, aussi appelé heatmap de corrélation, est une représentation graphique de la matrice de corrélation. Chaque cellule est colorée selon la valeur du coefficient. Le rouge indique une corrélation positive forte, le bleu une corrélation négative forte, et le blanc une corrélation proche de zéro. D'un seul coup d'oeil, on repère les groupes de variables liées entre elles. C'est un outil très pratique pour explorer rapidement un jeu de données comportant de nombreuses variables, avant de construire un modèle.

## Slide 10 (82 mots)

Passons au logiciel. Avec R, la fonction cor calcule la matrice de corrélation. Le package corrplot permet de la visualiser, par exemple avec des cercles et en n'affichant que le triangle supérieur. La fonction pairs trace tous les graphiques de dispersion deux à deux. Avec Python, la méthode corr de pandas calcule la matrice. La fonction heatmap de seaborn l'affiche en couleurs, avec les valeurs annotées. Et pairplot trace tous les nuages de points. Ces trois outils forment une excellente routine d'exploration.

## Slide 11 (81 mots)

Voici maintenant le principe le plus important, et le plus souvent oublié, de l'analyse de données. La corrélation n'implique pas la causalité. Deux variables peuvent être corrélées sans lien de cause à effet. Exemple célèbre, les ventes de glaces et le nombre de noyades sont corrélés positivement. Mais les glaces ne provoquent pas les noyades. Les deux sont causées par une troisième variable, la chaleur de l'été. Retenez-le bien, ne dites jamais que X cause Y à partir d'une simple corrélation.

## Slide 12 (93 mots)

Comment expliquer une corrélation entre X et Y ? Il existe cinq possibilités. Une causalité directe, X cause Y. Une causalité inverse, c'est en fait Y qui cause X. Une variable confondante, une troisième variable Z qui cause à la fois X et Y, comme la température dans l'exemple des glaces. Une coïncidence, la corrélation est due au hasard, surtout avec de petits échantillons. Et enfin une causalité bidirectionnelle, X et Y s'influencent mutuellement. Quiz, le revenu et le niveau d'études, quel cas ? Souvent une influence mutuelle, avec aussi des variables confondantes.

## Slide 13 (82 mots)

Comment établir une causalité, alors ? Il faut généralement trois éléments. D'abord une théorie solide, qui explique pourquoi X causerait Y. Ensuite une expérimentation, idéalement un essai randomisé contrôlé, où l'on manipule X et où l'on observe l'effet sur Y. Enfin une analyse statistique rigoureuse, qui contrôle les variables confondantes, par exemple avec la régression multiple ou les variables instrumentales. Avec des données observationnelles seules, on ne peut jamais prouver la causalité. On parle alors d'association, de prédiction ou de relation conditionnelle.

## Slide 14 (84 mots)

Abordons maintenant le problème de la multicolinéarité. Il y a multicolinéarité lorsque les variables explicatives d'un modèle de régression sont fortement corrélées entre elles. Le problème est qu'on ne peut plus distinguer l'effet propre de chaque variable. Prenons un exemple. Dans un modèle qui prédit le prix d'une maison, la superficie en mètres carrés et le nombre de pièces sont souvent très corrélés. Il devient alors difficile de séparer l'effet de la superficie de celui du nombre de pièces, car les deux varient ensemble.

## Slide 15 (84 mots)

La multicolinéarité a quatre conséquences. Des estimations instables, les coefficients peuvent varier énormément d'un échantillon à l'autre. Des erreurs standards élevées, si bien que des variables pourtant pertinentes deviennent non significatives, avec des p-values élevées. Une interprétation difficile, car il est impossible d'attribuer un effet à une variable précise. Et des problèmes numériques, dans le cas extrême de la multicolinéarité parfaite, la matrice X transposée X n'est plus inversible, et les moindres carrés ne peuvent plus être calculés. Il faut donc toujours la surveiller.

## Slide 16 (92 mots)

Pour détecter la multicolinéarité, on utilise le VIF, le facteur d'inflation de la variance. Il mesure de combien la variance d'un coefficient est augmentée par la multicolinéarité. Pour chaque variable X j, le VIF vaut un divisé par un moins R j deux, où R j deux est le R deux de la régression de X j sur toutes les autres variables explicatives. Un VIF égal à un signifie aucune multicolinéarité. Entre un et cinq, elle est modérée et acceptable. Au-delà de cinq, ou de dix selon les auteurs, elle devient problématique.

## Slide 17 (86 mots)

Quelles solutions face à la multicolinéarité ? On peut supprimer l'une des variables fortement corrélées. On peut combiner les variables, en créant un indice, par exemple leur moyenne ou leur somme. On peut utiliser une méthode de régularisation, comme la régression ridge ou le lasso. On peut collecter davantage de données, car avec plus d'observations, le problème s'atténue. Enfin, on peut centrer et réduire les variables, ce qui diminue la corrélation dans certains cas, notamment avec des termes d'interaction. Le choix dépend de l'objectif de l'analyse.

## Slide 18 (86 mots)

Pour calculer le VIF avec R, après avoir estimé votre régression, chargez le package car, puis appliquez la fonction vif à votre modèle. Vous obtenez directement une valeur par variable. Avec Python, importez la fonction variance inflation factor depuis le module outliers influence de statsmodels. On crée ensuite un tableau pandas, avec une colonne pour le nom des variables, et une colonne pour le VIF, calculé pour chaque colonne de la matrice X. Il ne reste qu'à afficher ce tableau et à repérer les valeurs élevées.

## Slide 19 (81 mots)

Passons aux applications. Premier cas, le jeu de données mtcars, intégré à R. Il décrit trente-deux modèles de voitures, avec leur consommation, leur poids, leur puissance, et d'autres caractéristiques. On peut d'abord calculer la matrice de corrélation entre toutes les variables. Puis la visualiser avec un corrélogramme. On détecte alors les variables fortement corrélées, comme le poids et la puissance. Et l'on anticipe ainsi les problèmes de multicolinéarité, avant même de construire le moindre modèle. C'est exactement la démarche à adopter.

## Slide 20 (91 mots)

Deuxième cas, des données immobilières, avec le prix, la superficie, le nombre de chambres, le nombre de salles de bain, l'âge et l'emplacement. Problème détecté, la superficie, le nombre de chambres et le nombre de salles de bain sont probablement très corrélés, et le VIF le confirmera. Quelle décision prendre ? On peut ne garder que la superficie, la variable la plus informative. Ou bien créer un indice de taille, qui combine superficie et nombre de pièces. Dans les deux cas, le modèle devient plus stable et plus facile à interpréter.

## Slide 21 (88 mots)

Résumons ce chapitre. Le coefficient de Pearson mesure la force et le sens d'une relation linéaire, entre moins un et plus un. La matrice de corrélation permet de visualiser les relations entre plusieurs variables à la fois. Les graphiques de dispersion sont indispensables pour détecter les relations non linéaires et les valeurs aberrantes. La corrélation n'est pas la causalité, c'est un principe fondamental. Enfin, la multicolinéarité se détecte avec le VIF, et se traite par suppression, combinaison ou régularisation. Au prochain chapitre, nous construirons et validerons des modèles.
