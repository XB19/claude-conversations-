# DSC 423 — Chapitre 7 — Script de narration (Colossyan)

Total : 1809 mots, soit environ 12 à 14 minutes.

## Slide 1 (82 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre sept du cours DSC quatre cent vingt-trois, consacré à la comparaison de modèles statistiques. Nous poursuivons la troisième partie du cours, qui couvre les semaines sept et huit. En pratique, un analyste construit rarement un seul modèle. Il en construit plusieurs, et doit choisir le meilleur. Mais sur quels critères ? Ce chapitre répond à cette question, en rassemblant les outils vus jusqu'ici dans une démarche de décision cohérente et rigoureuse.

## Slide 2 (81 mots)

Voici les objectifs de ce chapitre. Vous saurez distinguer les modèles emboîtés et non emboîtés, une différence fondamentale pour choisir la bonne méthode de comparaison. Vous utiliserez les critères AIC et BIC pour comparer des modèles non emboîtés. Vous maîtriserez la validation croisée pour comparer le pouvoir prédictif de manière robuste. Vous saurez gérer la parcimonie et le sur-ajustement, en appliquant le principe d'Occam. Et enfin, vous synthétiserez tous ces critères pour sélectionner un modèle final sur des études de cas.

## Slide 3 (96 mots)

Rappelons la distinction. Deux modèles sont emboîtés si l'un contient toutes les variables de l'autre. Par exemple, un modèle avec X un et X deux, et un modèle avec X un, X deux, X trois et X quatre. On les compare alors avec le test F partiel, un test direct et rigoureux. Deux modèles sont non emboîtés quand aucun n'est un cas particulier de l'autre. Ils peuvent utiliser des variables différentes, un terme au carré, une transformation logarithmique de Y, ou même un arbre de décision. Dans ce cas, le test F partiel ne s'applique plus.

## Slide 4 (88 mots)

Pour les modèles non emboîtés, on utilise d'abord les critères d'information, qui pénalisent la complexité. L'AIC vaut moins deux fois la log-vraisemblance, plus deux fois le nombre de paramètres. Le BIC remplace ce deux k par k fois le logarithme de n. Dans les deux cas, plus la valeur est faible, meilleur est le modèle. L'AIC est asymptotiquement efficace pour la prédiction. Le BIC pénalise plus fortement, et il est asymptotiquement cohérent. Une différence de deux points est faiblement significative, et au-delà de dix, elle est très significative.

## Slide 5 (84 mots)

Comparons à nouveau les deux critères. L'AIC, avec sa pénalité de deux k, vise la prédiction, et minimise l'erreur de prédiction. Le BIC, avec sa pénalité de k logarithme de n, vise la sélection du bon modèle. Règle pratique, utilisez l'AIC si vous cherchez à prédire avec un échantillon modéré, et le BIC si vous cherchez un modèle interprétable et parcimonieux, ou si votre échantillon est grand. Attention, ces critères ne testent aucune hypothèse, et ne fournissent pas de p-value. Ils sont purement comparatifs.

## Slide 6 (92 mots)

Il existe aussi un test formel pour les modèles non emboîtés, le test de Cox. Fondé sur les vraisemblances, il vérifie si l'un des deux modèles est significativement meilleur que l'autre. Une p-value inférieure à zéro virgule zéro cinq indique une différence significative. Mais ce test est asymétrique, on peut conclure que A est meilleur que B, sans pouvoir conclure l'inverse. En pratique, il est moins utilisé que les critères d'information, plus simples. Rappelons qu'avec R, on les obtient avec AIC et BIC, et avec Python, par les attributs aic et bic.

## Slide 7 (83 mots)

Passons à la validation croisée, une méthode robuste pour comparer le pouvoir prédictif de modèles, qu'ils soient emboîtés ou non. Elle mesure l'erreur de prédiction sur des données que le modèle n'a pas vues pendant son entraînement. Rappelons ses cinq étapes. Diviser les données en k sous-ensembles. Entraîner le modèle sur k moins un d'entre eux. Tester sur le sous-ensemble restant. Répéter l'opération k fois, pour que chaque sous-ensemble serve une fois de test. Et enfin, calculer l'erreur moyenne sur l'ensemble des tests.

## Slide 8 (83 mots)

Pourquoi la validation croisée est-elle préférable ? Elle évite le sur-ajustement, car le modèle n'est jamais évalué sur ses données d'entraînement. Elle fournit une estimation robuste, plus fiable qu'un seul découpage entre apprentissage et test. Et surtout, elle permet une comparaison universelle, entre régression linéaire, arbres de décision, forêts aléatoires ou réseaux de neurones. Pour les variantes, la validation à dix folds est le standard. La méthode leave one out convient aux petits échantillons, et la validation à cinq folds est moins coûteuse.

## Slide 9 (87 mots)

Quelles erreurs de prédiction utiliser ? Le MSE, erreur quadratique moyenne, est la moyenne des carrés des écarts. Il pénalise lourdement les grandes erreurs. Le RMSE, sa racine carrée, s'exprime dans les mêmes unités que Y, il est donc plus interprétable. Le MAE, erreur absolue moyenne, est la moyenne des valeurs absolues des écarts. Il est moins sensible aux valeurs aberrantes. Enfin, le MAPE, erreur absolue moyenne en pourcentage, rapporte chaque écart à la valeur observée. Il est utile pour comparer des modèles sur des échelles différentes.

## Slide 10 (88 mots)

Voyons la comparaison avec le logiciel. Avec R et caret, on définit un contrôle de validation croisée à dix folds. Puis on entraîne trois modèles avec la fonction train, une régression linéaire, une régression polynomiale avec les carrés de X un et X deux, et un arbre de décision avec la méthode rpart. On compare ensuite leurs RMSE. Avec Python et scikit-learn, on crée une régression linéaire et un arbre de décision de profondeur trois, puis cross val score calcule leurs erreurs quadratiques moyennes, qu'il suffit de comparer.

## Slide 11 (87 mots)

Abordons maintenant la parcimonie, avec le principe du rasoir d'Occam. Entre deux modèles qui expliquent aussi bien les données, le plus simple est préférable. Un modèle simple est plus interprétable, plus facile à comprendre et à expliquer. Il est moins sujet au sur-ajustement, car il ne capture pas le bruit. Il est plus stable d'un échantillon à l'autre. Et il est plus accessible à un public non spécialiste. En régression, on préfère donc un modèle avec moins de variables, même si son R deux est légèrement inférieur.

## Slide 12 (82 mots)

Le sur-ajustement se produit quand le modèle est trop complexe, et capture le bruit des données d'apprentissage, c'est-à-dire leurs fluctuations aléatoires, plutôt que le signal, la structure véritable. Ses causes sont connues, trop de variables par rapport au nombre d'observations, un modèle trop flexible comme un polynôme de degré élevé, l'absence de validation, et une optimisation excessive sur les données d'entraînement. Ses conséquences sont graves, des prédictions dégradées sur de nouvelles données, des coefficients instables, et une confiance excessive dans le modèle.

## Slide 13 (82 mots)

Comment détecter le sur-ajustement ? Quatre signaux doivent vous alerter. Premièrement, la comparaison entre apprentissage et test, si la performance est bien meilleure sur l'apprentissage, il y a sur-ajustement. Deuxièmement, la validation croisée, dont l'erreur moyenne est plus fiable que l'erreur d'apprentissage. Troisièmement, l'évolution du R deux ajusté, s'il diminue alors que le R deux augmente, les variables ajoutées sont inutiles. Et quatrièmement, la stabilité des coefficients, s'ils varient beaucoup avec de petits changements dans les données, le modèle est trop complexe.

## Slide 14 (86 mots)

Revenons au compromis biais-variance. Le biais est l'erreur due à la simplification du modèle, et la variance est sa sensibilité aux fluctuations de l'échantillon. En augmentant la complexité, on réduit le biais mais on augmente la variance. L'erreur de prédiction totale est égale au biais au carré, plus la variance, plus une erreur irréductible. Un modèle sous-ajusté a un biais élevé et ne capture pas la structure. Un modèle sur-ajusté a une variance élevée et capture le bruit. Le modèle optimal minimise la somme des deux.

## Slide 15 (87 mots)

Passons aux études de cas. Premier cas, la prédiction du prix des maisons avec Boston Housing. On compare trois modèles. M un, une régression linéaire avec des variables sélectionnées par stepwise, selon l'AIC. M deux, une régression linéaire avec toutes les variables. Et M trois, une régression polynomiale de degré deux, qui inclut toutes les variables et toutes leurs interactions. Avec R, on estime ces trois modèles avec lm et step, puis on compare leurs critères AIC et BIC. Quel modèle va l'emporter, à votre avis ?

## Slide 16 (89 mots)

Complétons avec la validation croisée à dix folds, grâce à caret, en comparant les RMSE des trois modèles. Résultats. Le modèle un a l'AIC et le BIC les plus faibles, c'est le meilleur compromis entre ajustement et complexité. Il a aussi le RMSE le plus faible, donc la meilleure prédiction sur des données non vues. Le modèle trois, polynomial, a un excellent R deux en apprentissage, mais un RMSE plus élevé en validation croisée. C'est la signature du sur-ajustement. Décision finale, on retient le modèle un, sélectionné par stepwise.

## Slide 17 (89 mots)

Deuxième cas, une régression linéaire face à un arbre de décision, sur des données non linéaires. Avec Python, on génère deux cents observations, où Y dépend d'un sinus de X plus une tendance linéaire, avec un bruit aléatoire. On fixe la graine pour la reproductibilité. On évalue ensuite chaque modèle par validation croisée à dix folds, l'arbre ayant une profondeur maximale de cinq. Résultat, l'arbre de décision capture mieux la structure non linéaire, et obtient un MSE plus faible. On le préfère donc ici, la linéarité n'étant pas adaptée.

## Slide 18 (85 mots)

Synthétisons les critères de choix d'un modèle final. Il y en a sept. La significativité statistique des variables, avec les tests t. Le pouvoir prédictif sur de nouvelles données, avec la validation croisée. La parcimonie, selon le principe d'Occam. L'interprétabilité, pour être compris des parties prenantes. La robustesse, face à de petites modifications des données. Le respect des hypothèses, vérifié par l'analyse des résidus. Et enfin le contexte métier, car le modèle doit répondre à la question posée. Aucun critère ne suffit à lui seul.

## Slide 19 (84 mots)

Voici le processus de sélection en six étapes. Première étape, l'exploration initiale, visualiser les données et calculer les corrélations. Deuxième étape, construire plusieurs modèles, avec différentes combinaisons de variables, transformations ou types de modèles. Troisième étape, les comparer avec l'AIC, le BIC et la validation croisée. Quatrième étape, le diagnostic, vérifier les résidus, les hypothèses et les points influents. Cinquième étape, la sélection finale, selon le compromis entre performance, parcimonie et interprétabilité. Et sixième étape, la validation finale sur un ensemble de test réservé.

## Slide 20 (92 mots)

Voici un guide pratique de décision. Pour des modèles emboîtés, utilisez le test F partiel. Pour des modèles non emboîtés à visée prédictive, l'AIC et la validation croisée. À visée explicative, le BIC. Si la différence d'AIC est inférieure à deux, les modèles sont équivalents, choisissez le plus simple. Entre deux et dix, préférence légère pour l'AIC le plus faible. Au-delà de dix, préférence forte. Et si plusieurs modèles ont des performances proches, choisissez le plus interprétable. Quiz, deux modèles avec quatre points d'écart d'AIC ? Légère préférence pour le plus faible.

## Slide 21 (82 mots)

Résumons ce chapitre. Les modèles emboîtés se comparent avec le test F partiel. Les modèles non emboîtés se comparent avec les critères d'information ou la validation croisée. L'AIC est préféré pour la prédiction, le BIC pour la sélection parcimonieuse. La validation croisée est la méthode la plus robuste pour comparer le pouvoir prédictif. Le rasoir d'Occam favorise les modèles simples. Le sur-ajustement est le risque majeur des modèles trop complexes. Enfin, le choix final intègre performance, parcimonie, interprétabilité, robustesse et contexte métier.
