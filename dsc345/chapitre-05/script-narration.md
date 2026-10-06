# DSC 345 — Chapitre 5 — Script de narration (Colossyan)

Total : 1097 mots, soit environ 7 à 8 minutes.

## Slide 1 (82 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre cinq du cours DSC trois cent quarante-cinq, consacré à la classification supervisée, avec deux algorithmes, les arbres de décision et les k plus proches voisins. Après la régression, qui prédit une valeur numérique, nous passons à la classification, qui prédit une catégorie. Malade ou sain, fraude ou transaction légitime, client fidèle ou client qui part. Ces deux algorithmes sont intuitifs, très utilisés, et constituent une excellente porte d'entrée vers la classification.

## Slide 2 (80 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, comprendre le fonctionnement des arbres de décision et des k plus proches voisins, que l'on appelle aussi k-NN. Deuxièmement, mettre en oeuvre des modèles de classification avec ces algorithmes. Troisièmement, évaluer la performance des modèles de classification, avec des métriques adaptées, au-delà de la simple exactitude. Et quatrièmement, comparer les forces et les faiblesses de chaque algorithme, pour savoir lequel choisir selon la situation. Commençons par distinguer les types de classification. Allons-y.

## Slide 3 (82 mots)

Il existe deux grands types de problèmes de classification. La classification binaire oppose deux classes, par exemple malade ou sain, spam ou non spam, ou encore client qui reste et client qui part. La classification multiclasse en comporte plus de deux, par exemple la reconnaissance de plusieurs espèces de fleurs, ou la catégorisation de documents par thème. Bonne nouvelle, les deux algorithmes présentés dans ce chapitre s'adaptent naturellement à ces deux configurations, sans modification particulière. Voyons d'abord les arbres. Pratique, non ?

## Slide 4 (90 mots)

Commençons par les arbres de décision. Un arbre de décision découpe récursivement l'espace des variables en régions de plus en plus pures, c'est-à-dire contenant de plus en plus une seule classe. À chaque noeud, il pose une question simple, du type, la variable x i est-elle supérieure à un seuil s ? Selon la réponse, on descend à gauche ou à droite. Chaque feuille, au bout de l'arbre, correspond finalement à une prédiction de classe. C'est un fonctionnement très proche du raisonnement humain, ce qui le rend facile à comprendre.

## Slide 5 (88 mots)

Comment l'arbre choisit-il ses questions ? À chaque étape, il retient celle qui maximise la pureté des sous-ensembles obtenus. Deux critères sont courants. L'impureté de Gini, égale à un moins la somme des carrés des proportions de chaque classe. Et l'entropie, égale à moins la somme des proportions multipliées par leur logarithme en base deux. P k est la proportion d'observations de la classe k dans le noeud. Ces deux critères valent zéro quand le noeud est parfaitement pur, et sont maximaux quand les classes sont également représentées.

## Slide 6 (84 mots)

Un arbre laissé libre de grandir jusqu'à ce que chaque feuille soit pure surapprend presque toujours. Il finit par mémoriser chaque exemple, y compris le bruit. On utilise donc l'élagage, ou pruning, pour limiter sa complexité. L'élagage peut se faire a priori, en fixant par exemple une profondeur maximale, ou un nombre minimal d'observations par feuille. Ou a posteriori, en supprimant les branches qui n'améliorent pas significativement la performance en validation. L'élagage est l'équivalent, pour les arbres, de la régularisation vue au chapitre quatre.

## Slide 7 (80 mots)

Les arbres de décision ont des avantages importants. Ils sont très interprétables, on peut suivre chaque décision du modèle, et l'expliquer à un public non technique. Ils ne nécessitent pas de normaliser les variables. Mais ils ont aussi une limite majeure. Un arbre unique est instable. Une légère modification des données peut produire une structure très différente. C'est justement cette instabilité qui a motivé l'invention des forêts aléatoires, qui combinent de nombreux arbres, et que nous étudierons au chapitre dix.

## Slide 8 (82 mots)

Passons aux k plus proches voisins, le k-NN. C'est un algorithme dit paresseux, en anglais lazy learning. Il ne construit aucun modèle pendant l'entraînement. Il se contente de mémoriser toutes les données. Pour classer une nouvelle observation, il cherche les k observations d'entraînement les plus proches, selon une mesure de distance, puis lui attribue la classe majoritaire parmi ces voisins. La distance la plus utilisée est la distance euclidienne, la racine carrée de la somme des carrés des écarts entre les variables.

## Slide 9 (85 mots)

Comment choisir le paramètre k ? Un k trop petit, par exemple un seul voisin, rend le modèle très sensible au bruit. C'est un surapprentissage local, chaque point isolé influence la décision. À l'inverse, un k trop grand lisse excessivement la frontière de décision, et peut ignorer des structures locales importantes. C'est du sous-apprentissage. Le k optimal se situe entre les deux, et se détermine généralement par validation croisée, en testant plusieurs valeurs. On retrouve ici, une fois encore, le compromis entre biais et variance.

## Slide 10 (86 mots)

Le k-NN souffre d'un problème particulier, la malédiction de la dimensionnalité. Quand le nombre de variables augmente, les distances entre observations deviennent de moins en moins discriminantes. Dans un espace de très grande dimension, presque tous les points finissent par être à peu près à la même distance les uns des autres. La notion de plus proche voisin perd alors son sens. Les performances du k-NN se dégradent fortement. C'est pourquoi on recourt souvent d'abord à une réduction de dimensionnalité, que nous verrons au chapitre huit.

## Slide 11 (86 mots)

Comment évaluer un modèle de classification ? Avec la matrice de confusion, qui croise les classes prédites et les classes réelles. On en tire trois métriques. La précision, vrais positifs divisés par vrais positifs plus faux positifs, mesure la part des prédictions positives qui sont correctes. Le rappel, vrais positifs divisés par vrais positifs plus faux négatifs, mesure la part des cas positifs effectivement détectés. Et le F un score, leur moyenne harmonique, très utile lorsque les classes sont déséquilibrées et qu'aucune métrique seule ne suffit.

## Slide 12 (84 mots)

Retenons les points clés. Un arbre de décision découpe récursivement l'espace des variables selon des critères de pureté, Gini ou entropie. L'élagage limite son surapprentissage. Le k-NN classe une observation selon la classe majoritaire de ses k plus proches voisins, sans phase d'apprentissage explicite. Il souffre de la malédiction de la dimensionnalité quand les variables sont nombreuses. Enfin, la précision, le rappel et le F un score complètent l'exactitude, en particulier lorsque les classes sont déséquilibrées. Ces notions serviront tout au long du cours.

## Slide 13 (88 mots)

Voici les corrigés. Premier exercice, avec trente observations A et dix B, les proportions sont zéro virgule soixante-quinze et zéro virgule vingt-cinq. Gini vaut un moins zéro virgule cinq six deux cinq moins zéro virgule zéro six deux cinq, soit zéro virgule trois sept cinq. Deuxième exercice, avec un pour cent de fraudes, prédire toujours non fraude donne quatre-vingt-dix-neuf pour cent d'exactitude, sans rien détecter. On préfère le rappel et le F un score. Troisième exercice, k égal un surapprend. On choisit k égal vingt-cinq, qui généralise mieux.
