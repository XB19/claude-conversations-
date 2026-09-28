# DSC 324 — Chapitre 2 — Script de narration (Colossyan)

Total : 992 mots, soit environ 7 à 8 minutes.

## Slide 1 (81 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre deux du cours DSC trois cent vingt-quatre, consacré à la visualisation avancée des données. Avant toute modélisation, il faut voir ses données. Un bon graphique révèle en quelques secondes une tendance, un regroupement ou une anomalie qu'un tableau de chiffres cacherait. Dans ce chapitre, nous allons parcourir les visualisations univariées, bivariées et multidimensionnelles, et surtout apprendre à choisir la bonne représentation, puis à l'interpréter avec méthode. Commençons tout de suite.

## Slide 2 (85 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, choisir des visualisations adaptées à la nature des données. Deuxièmement, représenter efficacement des données comportant plusieurs dimensions. Troisièmement, interpréter les informations révélées par les différentes visualisations. Et quatrièmement, identifier des tendances, des relations, des regroupements ou des anomalies à partir des représentations produites. Vous verrez que ces compétences sont directement utiles pour la suite du cours, en particulier avant une réduction dimensionnelle ou un clustering. Ce sont des réflexes à acquérir dès maintenant, pour tous vos projets.

## Slide 3 (80 mots)

Commençons par les principes. Une bonne visualisation statistique répond toujours à un objectif analytique précis. Décrire une distribution, comparer des groupes, révéler une relation entre variables, ou détecter des anomalies. Le choix du graphique doit donc être guidé par le nombre et le type de variables à représenter simultanément, et non par une préférence esthétique. Avant de tracer quoi que ce soit, posez-vous toujours deux questions. Que veux-je montrer ? Et combien de variables, de quel type, dois-je représenter ?

## Slide 4 (80 mots)

Pour explorer une seule variable, trois représentations sont complémentaires. L'histogramme découpe l'étendue des valeurs en intervalles, et affiche la fréquence dans chacun. Il révèle la forme de la distribution, symétrique, asymétrique ou bimodale. Le diagramme en boîte résume la distribution avec cinq indicateurs, le minimum, le premier quartile, la médiane, le troisième quartile et le maximum, et fait apparaître les valeurs aberrantes. Enfin, pour une variable qualitative, le diagramme en barres représente les effectifs ou les fréquences de chaque catégorie.

## Slide 5 (83 mots)

Pour explorer la relation entre deux variables, tout dépend de leur type. Si les deux sont quantitatives, le nuage de points est l'outil de référence. Il montre la force, la direction et la forme de la relation, linéaire ou non. Si l'une est qualitative, le boxplot comparatif, avec une boîte par catégorie, permet de comparer les distributions entre groupes. Et si les deux sont qualitatives, on utilise le tableau croisé, et le diagramme en barres empilées ou juxtaposées, pour examiner l'association entre catégories.

## Slide 6 (80 mots)

Passons aux visualisations multidimensionnelles, avec d'abord la matrice de corrélation, présentée sous forme de carte de chaleur. Chaque case, colorée, représente le coefficient de corrélation entre deux variables quantitatives. On repère ainsi rapidement les groupes de variables fortement corrélées, une information précieuse avant une réduction dimensionnelle. Rappelons la formule de Pearson. La corrélation entre x et y est égale à leur covariance, divisée par le produit de leurs écarts-types. Elle varie entre moins un et plus un. Ne l'oubliez pas.

## Slide 7 (81 mots)

Deuxième outil, le nuage de points matriciel, appelé pairplot, ou scatterplot matrix. Il juxtapose tous les nuages de points possibles, pour chaque paire de variables quantitatives. On obtient ainsi une vue d'ensemble rapide de toutes les relations bivariées. Sur la diagonale, on place souvent l'histogramme de chaque variable. Cet outil est idéal lorsque le nombre de variables reste modéré. Au-delà d'une dizaine de variables, la grille devient trop grande, et chaque petit graphique devient illisible. Il faudra alors une autre solution.

## Slide 8 (85 mots)

Troisième outil, les coordonnées parallèles. Chaque variable est placée sur un axe vertical, et les axes sont alignés côte à côte. Pour chaque observation, on relie ses valeurs sur tous les axes par une ligne brisée. Cette technique permet de visualiser simultanément de nombreuses variables, et de repérer des groupes d'observations au profil similaire, qui dessinent des faisceaux de lignes parallèles. Sa limite est la lisibilité, qui se dégrade fortement lorsque le nombre d'observations est très élevé. On peut aussi colorer les lignes par groupe.

## Slide 9 (82 mots)

Quand le nombre de variables est trop grand pour une visualisation directe, on peut d'abord réduire la dimension. Par exemple, l'analyse en composantes principales, que nous verrons aux chapitres trois et quatre, projette les données sur un plan à deux dimensions, appelé plan factoriel, qui conserve l'essentiel de l'information. Sur ce plan, on peut alors lire visuellement les regroupements et les structures présentes dans les données. Visualisation et réduction dimensionnelle sont donc étroitement liées. Nous y reviendrons. Ce sera notre fil rouge.

## Slide 10 (80 mots)

Comment interpréter une visualisation ? Avec une lecture méthodique en quatre temps. Repérer d'abord la forme générale de la distribution ou du nuage. Identifier ensuite d'éventuels regroupements naturels. Détecter les points isolés qui s'écartent nettement du reste, les valeurs aberrantes. Et enfin, confronter ces observations à la connaissance du domaine, avant toute conclusion. Retenez aussi ce principe. Une visualisation, même élégante, ne remplace jamais une analyse statistique rigoureuse. Elle en est la première étape, à confirmer par les méthodes quantitatives.

## Slide 11 (84 mots)

Retenons les points clés. Le choix d'une visualisation dépend du nombre et du type de variables, et de l'objectif poursuivi. L'histogramme et le boxplot résument une variable. Le nuage de points et le boxplot comparatif explorent la relation entre deux variables. La matrice de corrélation et le pairplot offrent une vue d'ensemble de plusieurs variables quantitatives. Enfin, les coordonnées parallèles et les projections après réduction dimensionnelle permettent de visualiser des données réellement multidimensionnelles. Ce sont les outils de base de tout analyste. Utilisez-les systématiquement.

## Slide 12 (91 mots)

Voici les corrigés des exercices. Un, pour l'âge, le revenu et la catégorie socioprofessionnelle, on peut proposer un histogramme du revenu pour sa distribution, un nuage de points âge et revenu pour leur relation, et un boxplot du revenu par catégorie pour comparer les groupes. Deux, trois variables corrélées à plus de zéro virgule quatre-vingt-cinq sont redondantes, et pourront être résumées par une seule composante principale. Trois, au-delà d'une quinzaine de variables, le pairplot compte plus de deux cents graphiques. On préfère alors la carte de chaleur ou une projection factorielle.
