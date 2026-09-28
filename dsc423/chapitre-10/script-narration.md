# DSC 423 — Chapitre 10 — Script de narration (Colossyan)

Total : 2245 mots, soit environ 15 à 17 minutes.

## Slide 1 (86 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre dix du cours DSC quatre cent vingt-trois, consacré au projet pratique, c'est-à-dire à l'application de tout ce que nous avons appris sur un jeu de données réelles. Ce chapitre correspond aux semaines dix et onze, et au cinquième résultat d'apprentissage du cours. C'est le moment de rassembler toutes les pièces du puzzle, de la question de recherche jusqu'à la présentation orale, en passant par l'exploration, la modélisation, le diagnostic et la rédaction du rapport final.

## Slide 2 (81 mots)

Voici les objectifs de ce chapitre. Vous saurez formuler une question de recherche pertinente, et sélectionner les variables appropriées. Vous explorerez et préparerez un jeu de données réelles, avec des statistiques descriptives et des visualisations. Vous construirez et comparerez plusieurs modèles de régression, classique, robuste ou avec transformations. Vous réaliserez un diagnostic approfondi des résidus, et évaluerez la robustesse des modèles. Vous rédigerez un rapport final structuré et professionnel. Et enfin, vous présenterez oralement vos résultats de manière claire et convaincante.

## Slide 3 (82 mots)

Toute analyse commence par une question de recherche claire et précise. Une bonne question réunit quatre qualités. Elle est spécifique, c'est-à-dire qu'elle n'est pas trop vague. Elle est mesurable, les variables nécessaires sont disponibles ou peuvent être collectées. Elle est pertinente, elle répond à un besoin réel, académique ou professionnel. Et elle est faisable, elle peut être traitée avec les méthodes vues dans ce cours. Prenez le temps de bien formuler votre question, car c'est elle qui guidera tous vos choix ultérieurs.

## Slide 4 (89 mots)

Voici quelques exemples de questions de recherche. Pour le prix des maisons, quels sont les facteurs qui influencent le prix des maisons à Boston ? Pour la consommation automobile, comment la consommation de carburant dépend-elle du poids, de la puissance et du nombre de cylindres ? Dans le domaine médical, quelles variables expliquent le mieux la survie des patients atteints d'une maladie cardiaque ? Et pour la qualité du vin, comment l'acidité, le sucre ou le pH influencent-ils la qualité perçue ? Chacune est spécifique, mesurable, pertinente et faisable.

## Slide 5 (92 mots)

Une fois la question formulée, il faut identifier la variable dépendante Y, ce que l'on cherche à expliquer, et les variables explicatives X. Quatre critères guident ce choix. La pertinence théorique, la variable a-t-elle un sens dans le contexte ? La disponibilité, est-elle présente dans les données ? La qualité, est-elle mesurée de manière fiable ? Et la redondance, apporte-t-elle une information nouvelle ? Pour le prix des maisons, on retiendra la superficie, les chambres, l'âge ou l'emplacement, en évitant par exemple de garder à la fois superficie et nombre de pièces.

## Slide 6 (84 mots)

Avant toute modélisation, il faut connaître ses données. L'exploration suit quatre étapes. D'abord, charger les données et vérifier leur structure. Ensuite, calculer les statistiques descriptives, moyenne, médiane, écart-type, minimum, maximum et quartiles pour les variables quantitatives, et fréquences pour les variables catégorielles. Puis, identifier les valeurs manquantes, et décider de leur traitement. Enfin, détecter les valeurs aberrantes, à l'aide de boîtes à moustaches ou de méthodes statistiques, comme la règle fondée sur l'écart interquartile. Ne sautez jamais cette étape, même si vous êtes pressés.

## Slide 7 (85 mots)

Voici le code correspondant. Avec R, on charge le fichier avec read csv, on examine la structure avec str, et l'on obtient les statistiques avec summary. La combinaison de colSums et de is na compte les valeurs manquantes par variable. La fonction boxplot trace les boîtes à moustaches, pour Y puis pour les variables explicatives. Avec Python, on utilise info et describe de pandas, puis isnull suivi de sum pour les valeurs manquantes. Enfin, la méthode boxplot trace les boîtes à moustaches des variables choisies.

## Slide 8 (82 mots)

Les visualisations exploratoires permettent de comprendre les relations entre variables, et d'anticiper les problèmes de modélisation. Les histogrammes montrent la distribution de chaque variable, et révèlent une éventuelle asymétrie. Les boîtes à moustaches détectent les valeurs aberrantes. Les nuages de points montrent la relation entre Y et chaque X, mais aussi entre les X eux-mêmes. La matrice de corrélation synthétise les relations linéaires, et le corrélogramme en donne une représentation graphique. Ensemble, ces outils vous donnent une image complète de vos données.

## Slide 9 (90 mots)

Voici le code des visualisations. Avec R, la commande par, avec mfrow, découpe la fenêtre en quatre, pour afficher les histogrammes de Y, X un, X deux et X trois. La fonction pairs trace tous les nuages de points deux à deux. La fonction cor calcule la matrice de corrélation, et corrplot la représente avec des cercles. Avec Python, la méthode hist de pandas trace tous les histogrammes. La fonction pairplot de seaborn trace les nuages de points, et heatmap affiche la matrice de corrélation en couleurs, avec les valeurs.

## Slide 10 (82 mots)

Vient ensuite la préparation des données. Les valeurs manquantes sont imputées, par la moyenne, la médiane, la régression ou l'imputation multiple, ou supprimées, selon leur proportion et leur mécanisme. Les valeurs aberrantes sont corrigées, transformées, ou supprimées si c'est justifié. Les variables catégorielles sont codées en variables indicatrices. Si nécessaire, on transforme certaines variables, par logarithme ou Box-Cox, pour linéariser une relation ou stabiliser la variance. Enfin, le centrage et la réduction peuvent améliorer l'interprétation ou la stabilité numérique. Documentez chaque choix.

## Slide 11 (90 mots)

Passons à la modélisation. L'objectif est de construire plusieurs modèles, puis de les comparer. On peut envisager cinq types de modèles. Un modèle de base, souvent la régression avec toutes les variables, qui sert de référence. Un modèle avec sélection de variables, par stepwise ou selon les critères AIC et BIC. Un modèle avec transformations, sur Y ou sur certaines variables X. Un modèle robuste, avec un M-estimateur, pour réduire l'influence des points aberrants. Et enfin un modèle avec interactions, ou des termes polynomiaux si la relation est non linéaire.

## Slide 12 (88 mots)

Voici le code R, sur Boston Housing. Le modèle un utilise toutes les variables, grâce au point dans la formule. Le modèle deux applique une sélection stepwise dans les deux directions, à partir du modèle un. Le modèle trois explique le logarithme du prix par six variables. Le modèle quatre ajoute une interaction entre le nombre de pièces et le statut socio-économique, notée avec une étoile. Enfin, le modèle cinq est une régression robuste de Huber, avec rlm. Cinq modèles, cinq hypothèses différentes sur la structure des données.

## Slide 13 (92 mots)

Voici l'équivalent en Python avec statsmodels. Pour le modèle un, on retire la colonne du prix pour former la matrice X, on ajoute la constante, et l'on estime avec OLS. Pour le modèle deux, on sélectionne six variables choisies, le taux de criminalité, les pièces, l'âge, le statut socio-économique, le ratio élèves par enseignant et la taxe. Le modèle trois utilise le logarithme de Y, avec numpy. Et le modèle cinq est une régression robuste, avec la classe RLM et la norme de Huber. La logique est identique à celle de R.

## Slide 14 (96 mots)

Comment comparer ces modèles ? On combine cinq critères. Les critères d'information, AIC et BIC, pour lesquels la valeur la plus faible est la meilleure. Le R deux ajusté, pour lequel la valeur la plus élevée est la meilleure. La validation croisée, avec le RMSE ou le MSE moyen sur les folds. Le diagnostic des résidus, car le modèle doit respecter les hypothèses. Et l'interprétabilité, car le modèle doit rester compréhensible. Attention, le R deux ajusté et le RMSE ne sont pas comparables entre un modèle sur Y et un modèle sur le logarithme de Y.

## Slide 15 (88 mots)

Voici le code de comparaison avec R. Les fonctions AIC et BIC comparent les quatre premiers modèles en une seule commande. Puis, avec caret, on définit une validation croisée à dix folds, et l'on entraîne trois modèles, le modèle complet, le modèle à six variables, et le modèle sur le logarithme du prix. On affiche enfin le RMSE de chacun. Le modèle qui combine un faible AIC, un bon R deux ajusté et un faible RMSE en validation croisée sera un excellent candidat pour devenir votre modèle final.

## Slide 16 (83 mots)

Pour le modèle que vous envisagez de retenir, il faut maintenant réaliser une analyse complète des résidus. Elle comporte trois volets. D'abord, les quatre graphiques de diagnostic, résidus contre valeurs ajustées, Q-Q plot, échelle-localisation, et résidus contre levier. Ensuite, les tests statistiques, Breusch-Pagan pour l'hétéroscédasticité, Shapiro-Wilk pour la normalité, et Durbin-Watson pour l'autocorrélation. Enfin, la détection des points influents, avec la distance de Cook, le levier et les résidus studentisés. C'est l'application directe du chapitre cinq. Prenez le temps de bien le faire.

## Slide 17 (87 mots)

Voici le code R du diagnostic. La commande par, avec mfrow deux par deux, affiche les quatre graphiques de diagnostic d'un seul coup, grâce à plot appliqué au modèle final. Le package lmtest fournit bptest pour Breusch-Pagan, et dwtest pour Durbin-Watson, tandis que shapiro test s'applique aux résidus. Enfin, on calcule les distances de Cook, et la fonction which liste les observations qui dépassent le seuil de quatre divisé par n moins le nombre de coefficients, moins un. Tout le diagnostic tient en une dizaine de lignes.

## Slide 18 (88 mots)

Et voici le diagnostic avec Python. On crée une grille de deux par deux graphiques avec matplotlib. En haut à gauche, les résidus contre les valeurs ajustées, avec une ligne rouge à zéro. En haut à droite, le Q-Q plot avec la fonction qqplot de statsmodels. En bas à gauche, l'échelle-localisation, avec la racine carrée de la valeur absolue des résidus. En bas à droite, les résidus contre le levier, obtenu grâce à get influence. Enfin, la fonction shapiro de scipy donne la p-value du test de normalité.

## Slide 19 (80 mots)

Il reste à évaluer la robustesse du modèle final. Première étape, comparez-le avec un modèle robuste, de Huber ou de Tukey, pour voir si les coefficients changent significativement. Deuxième étape, interprétez les différences. Si les coefficients diffèrent beaucoup, le modèle est sensible aux points influents, et il faut soit traiter ces points, soit retenir le modèle robuste. Troisième étape, vérifiez la stabilité des coefficients, par bootstrap ou par validation croisée. Un modèle dont les coefficients restent stables mérite votre confiance.

## Slide 20 (85 mots)

Passons à la rédaction du rapport final. Il comporte six parties. L'introduction présente le contexte, l'objectif, la question de recherche et les données, leur source, leur taille et leurs variables. La méthodologie décrit les variables, les méthodes statistiques et le logiciel utilisé. L'analyse exploratoire présente les statistiques descriptives, les graphiques et les corrélations. La modélisation présente les modèles, leur comparaison et le choix final. Le diagnostic valide le modèle retenu. Enfin, la conclusion interprète les résultats, discute les limites, et renvoie au code en annexe.

## Slide 21 (82 mots)

Voici cinq conseils de rédaction. La clarté, utilisez un langage simple et précis, et évitez le jargon inutile. La concision, allez à l'essentiel, les annexes sont là pour les détails. La visualisation, illustrez vos propos avec des tableaux et des graphiques bien choisis. L'honnêteté, mentionnez les limites de votre analyse, et ne surinterprétez pas les résultats, rappelez-vous que corrélation n'est pas causalité. Et enfin la reproductibilité, fournissez le code complet en annexe, sous forme de document R Markdown ou de notebook Jupyter.

## Slide 22 (88 mots)

Voici un exemple d'extrait de rapport. L'introduction explique que l'étude vise à identifier les facteurs du prix médian des maisons à Boston, à partir des données de Harrison et Rubinfeld, publiées en mille neuf cent soixante-dix-huit, avec cinq cent six observations et treize variables. Pour l'interprétation, le coefficient du nombre de pièces est de quatre virgule quatre-vingt-quinze, soit quatre mille neuf cent cinquante dollars par pièce supplémentaire, toutes choses égales par ailleurs. Et un point de population défavorisée en plus diminue le prix de cinq cent soixante dollars.

## Slide 23 (90 mots)

Passons à la présentation orale. Elle doit être plus concise que le rapport écrit. Visez dix à quinze minutes pour un projet individuel, et quinze à vingt minutes pour un projet de groupe. Voici la structure. L'introduction, une à deux minutes, avec le contexte, la question et les données. La méthodologie, une à deux minutes. Les résultats principaux, trois à cinq minutes, avec les tableaux, les graphiques clés et le modèle final. Le diagnostic, deux à trois minutes. Et la conclusion, suivie des questions du jury, quatre à sept minutes.

## Slide 24 (82 mots)

Voici cinq conseils pour une bonne présentation. Préparez des diapositives claires, avec peu de texte, des visuels et des titres explicites. Pratiquez, en répétant votre présentation pour maîtriser le temps. Anticipez les questions, en préparant des réponses aux questions les plus probables du jury, par exemple sur le choix des variables ou sur les limites du modèle. Restez simple, en expliquant les concepts de manière accessible. Et soyez enthousiaste, montrez que vous maîtrisez votre sujet, et que vos résultats vous intéressent vraiment.

## Slide 25 (90 mots)

Voici un exemple de diapositive de résultats, pour le modèle final du prix des maisons. Le nombre de pièces a un coefficient de quatre virgule quatre-vingt-quinze, et la population défavorisée de moins zéro virgule cinquante-six, tous deux avec une p-value inférieure à zéro virgule zéro zéro un. La criminalité et le ratio élèves par enseignant sont aussi très significatifs, l'âge et la taxe le sont au seuil de cinq pour cent. Le R deux ajusté est de zéro virgule soixante-dix-huit, et le RMSE en validation croisée de quatre virgule trente-cinq.

## Slide 26 (83 mots)

Résumons ce chapitre, et avec lui tout le cours. Une question de recherche claire est le point de départ de toute analyse. L'exploration et la préparation des données sont des étapes cruciales. Plusieurs modèles doivent être construits et comparés, classique, robuste, avec transformations. Le diagnostic des résidus et l'évaluation de la robustesse valident le modèle final. Le rapport doit être structuré, clair et reproductible, et la présentation orale concise, visuelle et bien préparée. Merci pour votre attention, et bon courage pour votre projet.
