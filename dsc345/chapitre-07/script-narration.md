# DSC 345 — Chapitre 7 — Script de narration (Colossyan)

Total : 845 mots, soit environ 6 à 7 minutes.

## Slide 1 (81 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre sept du cours DSC trois cent quarante-cinq, consacré aux machines à vecteurs de support, que l'on appelle SVM, pour Support Vector Machines. Les SVM sont des algorithmes de classification élégants et puissants, fondés sur une idée géométrique simple, chercher la frontière qui sépare le mieux les classes, avec la plus grande marge de sécurité possible. Grâce à l'astuce du noyau, ils savent aussi traiter des frontières non linéaires très complexes.

## Slide 2 (81 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, comprendre le principe des machines à vecteurs de support, et la notion de marge maximale. Deuxièmement, expliquer le rôle des noyaux, qui permettent de gérer les données non linéaires. Troisièmement, mettre en oeuvre des SVM pour des problèmes de classification, en réglant leurs hyperparamètres. Et quatrièmement, comparer les SVM avec les autres algorithmes de classification étudiés, les arbres de décision et les k plus proches voisins. Commençons par l'idée centrale, la marge maximale.

## Slide 3 (88 mots)

Face à deux classes séparables par une droite, il existe une infinité de frontières possibles. Le SVM choisit celle qui maximise la marge, c'est-à-dire la distance entre l'hyperplan séparateur et les points les plus proches de chaque classe. Ces points s'appellent les vecteurs de support. L'hyperplan s'écrit w point x plus b égale zéro, et la marge vaut deux divisé par la norme de w. Propriété remarquable, seuls les vecteurs de support déterminent la frontière. Les autres points, plus éloignés, n'ont aucune influence, contrairement à la régression logistique.

## Slide 4 (84 mots)

En pratique, les données sont rarement parfaitement séparables. Il y a presque toujours du bruit, ou un chevauchement entre les classes. Le SVM à marge souple, soft margin en anglais, tolère alors certaines erreurs, en les pénalisant grâce à un hyperparamètre noté C. Un C élevé pénalise fortement les erreurs, la marge devient étroite, avec un risque de surapprentissage. Un C faible tolère davantage d'erreurs, la marge s'élargit, avec un risque de sous-apprentissage. On retrouve encore une fois le compromis entre biais et variance.

## Slide 5 (84 mots)

Et si les classes ne sont pas séparables par une droite ? L'astuce du noyau, ou kernel trick, projette implicitement les données dans un espace de dimension supérieure, où une séparation linéaire redevient possible. Et cela sans jamais calculer explicitement cette transformation, qui serait très coûteuse. Trois noyaux sont courants. Le noyau linéaire, équivalent au SVM classique. Le noyau polynomial, qui introduit des interactions entre variables. Et le noyau RBF, ou gaussien, le plus utilisé, qui produit des frontières très souples et non linéaires.

## Slide 6 (89 mots)

Le noyau RBF s'écrit, K de x et x prime égale exponentielle de moins gamma fois le carré de la distance entre x et x prime. Le paramètre gamma contrôle l'influence de chaque point d'entraînement. Un gamma élevé restreint cette influence à un voisinage très proche. La frontière devient alors très sinueuse, avec un risque de surapprentissage. Un gamma faible étend l'influence à tout l'espace, et la frontière devient plus lisse. En pratique, on règle ensemble C et gamma, par validation croisée, par exemple avec une recherche en grille.

## Slide 7 (81 mots)

Le SVM est nativement binaire, il sépare deux classes. Deux stratégies permettent de l'étendre à plusieurs classes. La stratégie un contre tous, ou One-vs-Rest, entraîne un classifieur par classe, qui oppose cette classe à toutes les autres. La stratégie un contre un, ou One-vs-One, entraîne un classifieur pour chaque paire de classes, puis combine leurs votes. Avec dix classes, cela fait quarante-cinq classifieurs. Bonne nouvelle, les bibliothèques comme scikit-learn gèrent automatiquement cette extension, sans effort de votre part. C'est très pratique.

## Slide 8 (81 mots)

Faisons le bilan des SVM. Leurs avantages, ils sont particulièrement efficaces en haute dimension, et lorsque le nombre d'observations reste modéré. Ils offrent de bonnes garanties de généralisation, grâce à la marge maximale. Leurs limites, ils deviennent coûteux en temps de calcul sur de très grands jeux de données. Et le choix du noyau, ainsi que de ses hyperparamètres, C et gamma, nécessite une recherche par validation croisée. Ils sont aussi moins interprétables qu'un arbre de décision. Choisissez selon le contexte.

## Slide 9 (87 mots)

Retenons les points clés. Le SVM cherche l'hyperplan qui maximise la marge entre les classes, et cet hyperplan dépend uniquement des vecteurs de support. La marge souple, contrôlée par C, tolère certaines erreurs, pour gérer des données bruitées ou non parfaitement séparables. L'astuce du noyau permet de traiter des frontières non linéaires, sans calcul explicite dans un espace de dimension supérieure. Le noyau RBF, paramétré par gamma, est le plus utilisé. Enfin, les stratégies un contre tous et un contre un étendent le SVM au cas multiclasse.

## Slide 10 (89 mots)

Voici les corrigés. Premier exercice, avec C égal à zéro virgule zéro un, le SVM tolère beaucoup d'erreurs, avec une marge large, au risque du sous-apprentissage. Avec C égal à cent, il cherche à tout classer correctement, avec une marge étroite, au risque du surapprentissage. Deuxième exercice, pour une frontière en spirale, on choisit le noyau RBF, car aucune droite ne peut séparer une spirale. Troisième exercice, seuls les points proches de la frontière comptent. Un point aberrant éloigné n'a donc aucune influence, ce qui rend le SVM robuste.
