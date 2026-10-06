# DSC 345 — Chapitre 2 — Script de narration (Colossyan)

Total : 917 mots, soit environ 6 à 7 minutes.

## Slide 1 (81 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre deux du cours DSC trois cent quarante-cinq, consacré aux rappels statistiques et à la préparation des données. On dit souvent qu'un modèle ne vaut que ce que valent ses données. C'est pourquoi, avant d'étudier les algorithmes, nous allons revoir quelques bases indispensables, les probabilités, les tests et l'optimisation, puis apprendre à préparer correctement un jeu de données. Cette étape représente souvent la majeure partie du travail réel d'un data scientist.

## Slide 2 (80 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, maîtriser les concepts statistiques fondamentaux nécessaires au Machine Learning. Deuxièmement, comprendre l'importance de la préparation des données pour la qualité des modèles. Troisièmement, appliquer des techniques de prétraitement sur des jeux de données réels, comme le traitement des valeurs manquantes, l'encodage et la mise à l'échelle. Et quatrièmement, réaliser une analyse exploratoire des données, pour guider le choix des modèles. Ces compétences serviront dans tous les chapitres suivants. Commençons par les probabilités.

## Slide 3 (86 mots)

Commençons par les probabilités. Une variable aléatoire décrit le résultat incertain d'une expérience, et sa distribution indique la vraisemblance de chaque valeur possible. Deux lois reviennent sans cesse en Machine Learning. La loi normale, ou gaussienne, en forme de cloche, qui modélise de nombreux phénomènes continus autour d'une moyenne. Et la loi de Bernoulli, qui modélise un résultat binaire, succès ou échec, à la base de la classification. La moyenne, mu, résume la tendance centrale, et l'écart-type, sigma, la dispersion. Ces deux notions fondent la standardisation.

## Slide 4 (85 mots)

Un test d'hypothèse permet de trancher, à partir d'un échantillon, sur une affirmation concernant toute une population. Par exemple, la moyenne des revenus diffère-t-elle entre deux groupes ? On formule une hypothèse nulle, H zéro, et une hypothèse alternative, H un. Puis on calcule une statistique de test et une p-value, qui mesure la probabilité d'observer un résultat au moins aussi extrême si H zéro était vraie. En Machine Learning, ces outils servent notamment à comparer deux modèles, ou à vérifier la pertinence d'une variable.

## Slide 5 (87 mots)

Entraîner un modèle revient presque toujours à minimiser une fonction de coût, qui mesure l'écart entre les prédictions et les valeurs réelles. L'algorithme le plus répandu est la descente de gradient. On ajuste les paramètres pas à pas, dans la direction opposée au gradient de la fonction de coût, jusqu'à atteindre un minimum. Le nouveau paramètre est égal à l'ancien, moins alpha fois le gradient. Alpha est le taux d'apprentissage. Trop élevé, il empêche la convergence. Trop faible, il ralentit énormément l'entraînement. Son réglage est donc essentiel.

## Slide 6 (83 mots)

Passons à la préparation des données, avec d'abord les valeurs manquantes. Les jeux de données réels en comportent presque toujours. Trois stratégies existent. La suppression des observations ou des variables concernées, envisageable si le taux de valeurs manquantes est faible. L'imputation simple, par la moyenne, la médiane ou le mode. Et l'imputation par un modèle prédictif, plus sophistiquée, qui estime la valeur manquante à partir des autres variables. Le choix dépend de la proportion de valeurs manquantes, et des liens entre les variables.

## Slide 7 (82 mots)

Deuxième étape, l'encodage des variables catégorielles. Les algorithmes manipulent des nombres, pas du texte. Il faut donc transformer les catégories. L'encodage one-hot crée une colonne binaire par modalité. Il convient aux variables sans ordre naturel, comme la couleur ou la région. L'encodage ordinal, ou label encoding, attribue un entier à chaque modalité. Il convient aux variables ordonnées, comme un niveau de satisfaction faible, moyen ou élevé. Attention, utiliser un encodage ordinal pour une variable sans ordre créerait une hiérarchie artificielle et trompeuse.

## Slide 8 (82 mots)

Troisième étape, la mise à l'échelle. De nombreux algorithmes, comme la régression régularisée, les k plus proches voisins, les SVM, les k-means ou l'analyse en composantes principales, sont sensibles à l'échelle des variables. La standardisation soustrait la moyenne et divise par l'écart-type, pour obtenir une moyenne nulle et un écart-type de un. La normalisation min-max soustrait le minimum et divise par l'étendue, pour ramener chaque variable entre zéro et un. Sans cette étape, une variable exprimée en milliers écraserait toutes les autres.

## Slide 9 (83 mots)

Avant toute modélisation, l'analyse exploratoire des données, que l'on appelle EDA, permet de comprendre leur structure. On examine les distributions des variables, la présence de valeurs aberrantes, les corrélations entre variables explicatives, et un éventuel déséquilibre des classes, par exemple très peu de fraudes parmi des milliers de transactions. Les outils les plus utilisés sont les histogrammes, les boîtes à moustaches, les matrices de corrélation et les nuages de points. Une analyse exploratoire soignée oriente le choix des algorithmes et anticipe les difficultés.

## Slide 10 (83 mots)

Retenons les points clés. La loi normale et la loi de Bernoulli sont les distributions de référence, en régression et en classification. La descente de gradient minimise une fonction de coût en suivant l'opposé de son gradient. Les valeurs manquantes peuvent être supprimées, imputées simplement, ou imputées par un modèle. L'encodage one-hot convient aux variables non ordonnées, et l'encodage ordinal aux variables ordonnées. La standardisation et la normalisation mettent les variables à la même échelle. Enfin, l'analyse exploratoire guide le choix du modèle.

## Slide 11 (85 mots)

Voici les corrigés. Premier exercice, avec huit pour cent de valeurs manquantes sur un revenu fortement corrélé à l'âge et au niveau d'études, l'imputation par un modèle prédictif est la plus pertinente, car elle exploite ces liens. Deuxième exercice, pour une région à douze modalités sans ordre, on choisit l'encodage one-hot. Son inconvénient, avec beaucoup de modalités, est la multiplication des colonnes. Troisième exercice, sans standardisation, le salaire, exprimé en milliers, dominerait le calcul des distances des k plus proches voisins, et l'âge serait ignoré.
