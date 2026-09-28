# DSC 324 — Chapitre 7 — Script de narration (Colossyan)

Total : 929 mots, soit environ 6 à 7 minutes.

## Slide 1 (80 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre sept du cours DSC trois cent vingt-quatre, consacré à l'introduction au clustering. Après la réduction dimensionnelle, qui résume les colonnes de notre matrice de données, nous passons au regroupement des lignes, c'est-à-dire des observations. Le clustering permet par exemple de découvrir des segments de clientèle, ou des profils de patients, sans les connaître à l'avance. Ce chapitre pose les bases conceptuelles, que nous mettrons en pratique au chapitre huit.

## Slide 2 (81 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, expliquer les principes fondamentaux du clustering. Deuxièmement, identifier les caractéristiques qui permettent de mesurer la similarité entre observations, c'est-à-dire les mesures de distance. Troisièmement, distinguer les principales approches de regroupement, qui reposent sur des logiques différentes. Et quatrièmement, interpréter les caractéristiques des groupes obtenus, une étape essentielle mais trop souvent négligée. À la fin de ce chapitre, vous aurez une vision d'ensemble des méthodes de clustering. Commençons par le principe même du regroupement.

## Slide 3 (80 mots)

Le clustering, ou classification non supervisée, vise à regrouper des observations similaires au sein de groupes homogènes, appelés clusters. Et cela, sans disposer d'aucune étiquette préalable indiquant à quel groupe appartient chaque observation. C'est donc une méthode exploratoire par excellence. On l'utilise pour la segmentation de clientèle, la détection de profils, ou comme étape préparatoire à une analyse plus fine. L'objectif est double, des observations très semblables à l'intérieur d'un groupe, et des groupes bien distincts les uns des autres.

## Slide 4 (81 mots)

Attention à ne pas confondre clustering et classification. Le clustering, que nous étudions aux chapitres sept et huit, regroupe des observations sans connaître à l'avance leurs catégories réelles. La classification, étudiée aux chapitres neuf et dix, apprend à partir d'exemples déjà étiquetés, pour prédire la catégorie de nouvelles observations. Petit quiz. Une banque veut découvrir des types de clients qu'elle ne connaît pas encore. Clustering ou classification ? Clustering, car aucune étiquette n'existe. Cette distinction fondamentale sera approfondie au chapitre neuf.

## Slide 5 (83 mots)

Toute méthode de clustering repose sur une mesure de similarité, ou de façon équivalente, de distance entre deux observations. Plus deux observations sont proches selon cette mesure, plus elles sont considérées comme similaires. Pour des variables quantitatives, la distance la plus utilisée est la distance euclidienne. Elle est égale à la racine carrée de la somme, sur toutes les variables, des carrés des écarts entre les deux observations. C'est tout simplement la distance à vol d'oiseau, généralisée à un espace de p dimensions.

## Slide 6 (89 mots)

D'autres distances conviennent à des contextes particuliers. La distance de Manhattan est la somme des écarts absolus. Elle est moins sensible aux valeurs extrêmes que la distance euclidienne, car elle ne met pas les écarts au carré. La distance de corrélation compare la forme des profils plutôt que leur amplitude. Deux clients qui ont les mêmes habitudes, mais à des niveaux de dépense différents, seront jugés proches. Enfin, la distance de Gower s'applique aux données mixtes, quantitatives et qualitatives, en combinant des mesures adaptées à chaque type de variable.

## Slide 7 (82 mots)

Voici un point de vigilance important. Comme pour la PCA, les variables doivent presque toujours être standardisées avant de calculer une distance. Sinon, les variables à forte variance domineraient artificiellement la mesure de similarité. Imaginez un revenu exprimé en euros et un âge exprimé en années. Un écart de mille euros de revenu pèserait bien plus qu'un écart de trente ans d'âge, ce qui n'a aucun sens. La standardisation met toutes les variables sur un pied d'égalité, avant le calcul des distances.

## Slide 8 (91 mots)

Il existe quatre grandes approches de regroupement. Le clustering de partition, comme K-means ou K-médoïdes, répartit les observations en un nombre fixé K de groupes, en optimisant leur compacité. Le clustering hiérarchique construit une hiérarchie complète de regroupements, représentée par un dendrogramme, sans fixer le nombre de groupes à l'avance. Le clustering par densité, comme DBSCAN, définit les groupes comme des régions denses séparées par des zones creuses, et repère naturellement les points atypiques. Enfin, le clustering par modèles, comme les mélanges gaussiens, suppose que chaque groupe suit sa propre distribution.

## Slide 9 (83 mots)

Une fois les groupes obtenus, vient l'étape la plus importante, et souvent la plus négligée. Il faut les caractériser statistiquement. Pour chaque cluster, on compare la moyenne, ou la distribution, de chaque variable à la moyenne générale de l'échantillon. On dégage ainsi le profil distinctif de chaque groupe. Cette caractérisation transforme un résultat algorithmique brut en une information exploitable. On peut alors nommer les segments, par exemple jeunes urbains connectés, et les présenter clairement à des décideurs non spécialistes. Ne la sautez jamais.

## Slide 10 (86 mots)

Retenons les points clés. Le clustering regroupe des observations similaires sans étiquette préalable, contrairement à la classification, qui apprend à partir d'exemples étiquetés. La distance euclidienne est la mesure la plus courante pour des variables quantitatives standardisées, mais d'autres distances existent pour des cas particuliers. Il existe quatre grandes familles d'approches, la partition, le hiérarchique, la densité et les modèles. Enfin, interpréter un cluster nécessite de comparer le profil moyen de chaque groupe à la moyenne générale de l'échantillon. Au prochain chapitre, place à la pratique.

## Slide 11 (93 mots)

Voici les corrigés. Un, les écarts entre les deux clients sont zéro virgule six, zéro virgule quatre et moins zéro virgule sept. Leurs carrés font zéro virgule trente-six, zéro virgule seize et zéro virgule quarante-neuf, soit un total de un virgule zéro un. La distance vaut donc environ un virgule zéro zéro cinq. Deux, la distance euclidienne ne sait pas traiter des variables qualitatives comme la région. La distance de Gower répond à ce problème. Trois, un cluster plus jeune et moins aisé que la moyenne pourrait s'appeler jeunes actifs aux revenus modestes.
