# DSC 345 — Chapitre 10 — Script de narration (Colossyan)

Total : 1163 mots, soit environ 8 à 9 minutes.

## Slide 1 (89 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre dix du cours DSC trois cent quarante-cinq, consacré aux méthodes d'ensemble, en anglais ensemble methods. Ces méthodes reposent sur une idée simple et puissante. Plutôt que de compter sur un seul modèle, on en combine plusieurs. Comme dans un jury, l'avis collectif est souvent plus fiable que celui d'un seul expert. Les forêts aléatoires et le boosting, que nous allons étudier, figurent parmi les algorithmes les plus performants sur les données tabulaires, et sont très utilisés en entreprise.

## Slide 2 (80 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, comprendre le principe des méthodes d'ensemble, et pourquoi elles fonctionnent. Deuxièmement, comparer les trois grandes approches, le Bagging, le Boosting et le Stacking. Troisièmement, mettre en oeuvre des forêts aléatoires et des modèles de boosting, comme XGBoost. Et quatrièmement, analyser les situations dans lesquelles chaque méthode est la plus appropriée, selon que l'on cherche à réduire la variance ou le biais. Commençons par la question fondamentale, pourquoi combiner plusieurs modèles ? Allons-y.

## Slide 3 (85 mots)

Un modèle unique, aussi bien conçu soit-il, commet des erreurs qui lui sont propres. L'idée des méthodes d'ensemble est de combiner les prédictions de plusieurs modèles, appelés apprenants faibles, pour obtenir un modèle global plus robuste et plus précis que chacun d'eux pris isolément. Cette amélioration repose sur la diversité des erreurs. Si les erreurs des différents modèles ne sont pas corrélées, elles ont tendance à s'annuler lors de l'agrégation. C'est pourquoi on cherche toujours à rendre les modèles d'un ensemble aussi différents que possible.

## Slide 4 (85 mots)

Première approche, le Bagging, pour Bootstrap Aggregating. On entraîne plusieurs modèles identiques, généralement des arbres de décision, chacun sur un échantillon bootstrap différent. Un échantillon bootstrap est tiré avec remise à partir du jeu d'entraînement original. Certaines observations y apparaissent donc plusieurs fois, et d'autres pas du tout. Chaque arbre voit ainsi des données légèrement différentes. La prédiction finale résulte d'un vote majoritaire, pour la classification, ou d'une moyenne, pour la régression. Ce petit changement suffit à rendre chaque arbre unique et complémentaire des autres.

## Slide 5 (85 mots)

La forêt aléatoire, ou Random Forest, enrichit le Bagging avec une seconde source de hasard. À chaque division d'un arbre, seul un sous-ensemble aléatoire des variables est considéré pour choisir la meilleure question. Cette double randomisation, sur les observations et sur les variables, rend les arbres encore plus différents les uns des autres. Elle réduit donc davantage la variance de l'ensemble qu'un simple Bagging. C'est la réponse directe à l'instabilité des arbres de décision, évoquée au chapitre cinq. Elle est aussi très facile à utiliser.

## Slide 6 (87 mots)

Pourquoi le Bagging fonctionne-t-il ? Parce qu'il réduit principalement la variance d'un modèle instable, comme l'arbre de décision profond. Un arbre seul change beaucoup selon les données qu'il voit. Mais en moyennant de nombreux arbres, entraînés sur des échantillons différents, ces variations se compensent. Et cela sans augmenter significativement le biais, car chaque arbre reste un modèle riche. Le Bagging est donc la méthode de choix face au surapprentissage d'un modèle très flexible. Elle est donc un excellent point de départ, avant d'essayer des méthodes plus complexes.

## Slide 7 (80 mots)

Deuxième approche, le Boosting. Contrairement au Bagging, où les modèles sont entraînés indépendamment et en parallèle, le Boosting les entraîne de façon séquentielle, l'un après l'autre. Chaque nouveau modèle se concentre sur les erreurs commises par les modèles précédents. On construit ainsi, pas à pas, un modèle de plus en plus précis, comme un élève qui retravaille en priorité les exercices qu'il a ratés. C'est une logique de correction progressive, très différente du vote indépendant du Bagging. Voyons deux exemples.

## Slide 8 (82 mots)

Le premier algorithme de boosting célèbre est AdaBoost, pour Adaptive Boosting. À chaque itération, il augmente le poids des observations mal classées par les modèles précédents. Le modèle suivant est ainsi forcé de se concentrer davantage sur les cas difficiles. Au final, la prédiction combine tous les modèles, en pondérant chacun selon sa performance. Un modèle qui s'est montré fiable pèse plus lourd dans la décision finale qu'un modèle qui s'est souvent trompé. C'est un vote pondéré, plus intelligent qu'un vote simple.

## Slide 9 (81 mots)

Le Gradient Boosting généralise cette idée. À chaque étape, il entraîne un nouveau modèle pour prédire directement les résidus, c'est-à-dire les erreurs, du modèle cumulé précédent. Cela revient à effectuer une descente de gradient, mais dans l'espace des fonctions. XGBoost, pour Extreme Gradient Boosting, en est une implémentation optimisée, très utilisée en pratique pour sa rapidité, sa gestion intégrée de la régularisation, et sa robustesse. Il a d'ailleurs remporté de nombreuses compétitions de science des données. Il est devenu une référence.

## Slide 10 (81 mots)

Pourquoi le Boosting fonctionne-t-il ? Parce qu'il réduit principalement le biais d'un modèle simple. On part souvent d'arbres très courts, qui sous-apprennent seuls. Puis, en ajoutant des modèles qui corrigent progressivement les erreurs, on construit un modèle composite de plus en plus fin. Mais attention, ce mécanisme a un revers. Si le nombre d'itérations n'est pas contrôlé, le modèle finit par corriger le bruit lui-même, et surapprend. On surveille donc la performance en validation, et l'on arrête l'entraînement au bon moment.

## Slide 11 (82 mots)

Troisième approche, le Stacking, ou empilement. Il combine les prédictions de plusieurs modèles de natures différentes, par exemple un arbre, un SVM et une régression logistique. Un modèle final, appelé méta-modèle, apprend à pondérer au mieux leurs prédictions. Contrairement au Bagging et au Boosting, qui combinent généralement des modèles de même type, le Stacking exploite la diversité des familles d'algorithmes. Chaque famille voit les données sous un angle différent, et le méta-modèle apprend à tirer parti de ces points de vue complémentaires.

## Slide 12 (83 mots)

Comment choisir ? Privilégiez le Bagging, ou la forêt aléatoire, lorsque le modèle de base est instable, avec une forte variance, comme les arbres de décision profonds. Privilégiez le Boosting, avec AdaBoost, le Gradient Boosting ou XGBoost, pour obtenir la meilleure performance prédictive brute, en surveillant le risque de surapprentissage, et en acceptant un entraînement séquentiel plus long. Et choisissez le Stacking lorsque vous disposez déjà de plusieurs modèles performants et complémentaires, pour en tirer le meilleur parti combiné. Testez toujours plusieurs approches.

## Slide 13 (81 mots)

Retenons les points clés. Les méthodes d'ensemble combinent plusieurs modèles, pour obtenir une meilleure performance que chaque modèle isolé. Le Bagging, dont la forêt aléatoire, entraîne des modèles en parallèle sur des échantillons bootstrap, pour réduire la variance. Le Boosting, avec AdaBoost, le Gradient Boosting et XGBoost, entraîne des modèles séquentiellement, chacun corrigeant les erreurs du précédent, pour réduire le biais. Et le Stacking combine des modèles de familles différentes, grâce à un méta-modèle. Retenez bien ces quatre idées. Bonne révision.

## Slide 14 (82 mots)

Voici les corrigés. Premier exercice, un arbre unique qui surapprend souffre d'une forte variance. On recommande donc le Bagging, et en particulier la forêt aléatoire, qui réduit justement la variance. Deuxième exercice, le Bagging entraîne ses modèles en parallèle et indépendamment, et leur moyenne réduit la variance. Le Boosting les entraîne séquentiellement, chacun corrigeant le précédent, ce qui réduit le biais. Troisième exercice, le Stacking utilise des familles différentes, car des modèles identiques feraient les mêmes erreurs, et n'apporteraient rien à combiner.
