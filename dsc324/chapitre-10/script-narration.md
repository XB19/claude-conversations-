# DSC 324 — Chapitre 10 — Script de narration (Colossyan)

Total : 952 mots, soit environ 6 à 7 minutes.

## Slide 1 (85 mots)

Bonjour à toutes et à tous, et bienvenue dans le chapitre dix du cours DSC trois cent vingt-quatre, consacré à la classification et à l'aide à la décision. Au chapitre précédent, nous avons vu comment construire un modèle de classification. Mais comment savoir s'il est bon ? Et surtout, comment l'utiliser pour prendre de meilleures décisions ? C'est tout l'objet de ce chapitre. Nous verrons la matrice de confusion, les principales métriques, la courbe ROC, et le passage de la prédiction statistique à l'action concrète.

## Slide 2 (83 mots)

Voici les objectifs pédagogiques de ce chapitre. Premièrement, analyser et évaluer la qualité des résultats d'une classification. Deuxièmement, interpréter les erreurs de classification, en comprenant que toutes les erreurs n'ont pas le même coût. Troisièmement, analyser la capacité d'une méthode à bien différencier les catégories, indépendamment de tout seuil de décision. Et quatrièmement, utiliser les résultats d'une classification pour soutenir une décision réelle. C'est ce dernier point qui donne toute sa valeur à un modèle de classification. Commençons par la matrice de confusion.

## Slide 3 (91 mots)

La matrice de confusion croise les catégories prédites et les catégories réelles, sur un jeu de test. C'est le point de départ de toute évaluation. On y trouve les vrais positifs et les vrais négatifs, les prédictions correctes, ainsi que les faux positifs et les faux négatifs, les deux types d'erreurs. L'exactitude est la somme des vrais positifs et des vrais négatifs, divisée par le total. Attention, elle peut être trompeuse avec des catégories déséquilibrées. Un modèle qui prédit toujours la catégorie majoritaire peut afficher une exactitude élevée, sans aucune utilité.

## Slide 4 (87 mots)

D'autres métriques sont donc nécessaires. La précision, égale aux vrais positifs divisés par la somme des vrais positifs et des faux positifs, mesure la fiabilité des prédictions positives. Le rappel, ou sensibilité, égal aux vrais positifs divisés par la somme des vrais positifs et des faux négatifs, mesure la capacité à détecter tous les cas positifs. Le F un score est la moyenne harmonique des deux, deux fois le produit sur la somme. Le choix de la métrique dépend directement du coût relatif des deux types d'erreurs.

## Slide 5 (83 mots)

Un faux positif, erreur de type un, et un faux négatif, erreur de type deux, n'ont généralement pas le même coût. Pour la détection de fraude, un faux négatif, c'est-à-dire une fraude non détectée, coûte bien plus cher qu'un faux positif, une transaction légitime simplement vérifiée. Pour un dépistage médical préliminaire, un faux positif entraîne des examens complémentaires coûteux, mais un faux négatif peut avoir des conséquences bien plus graves pour le patient. Il faut donc toujours raisonner en termes de coûts métier.

## Slide 6 (85 mots)

Voici un point de vigilance essentiel. Un modèle de classification produit généralement une probabilité, que l'on convertit en catégorie à l'aide d'un seuil de décision. Au-dessus du seuil, on prédit la catégorie positive. Ce seuil ne doit pas être fixé arbitrairement à zéro virgule cinq par défaut. Il doit être ajusté selon le coût relatif des deux types d'erreurs. Pour détecter la fraude, on abaissera le seuil, afin de rattraper davantage de fraudes, quitte à multiplier les vérifications inutiles. Le seuil est un choix métier.

## Slide 7 (83 mots)

La courbe ROC représente, pour tous les seuils de décision possibles, le taux de vrais positifs en fonction du taux de faux positifs. Elle montre donc le compromis entre détection et fausses alertes. L'aire sous cette courbe, appelée AUC, résume cette capacité en un seul nombre. Elle vaut zéro virgule cinq pour un modèle non informatif, équivalent à un tirage au hasard, et un pour une séparation parfaite des catégories. Son grand avantage est d'être indépendante du choix d'un seuil de décision particulier.

## Slide 8 (84 mots)

Un modèle statistiquement performant ne trouve sa vraie valeur que lorsqu'il soutient une décision concrète. Accorder ou refuser un crédit, cibler une action marketing, orienter un patient vers un examen complémentaire. Cette dernière étape consiste à traduire les prédictions du modèle, et leur incertitude, mesurée par les probabilités, en actions opérationnelles. Et cela en tenant compte des contraintes et des coûts propres à l'organisation. Un bon analyste ne s'arrête donc pas à l'AUC, il se demande ce que l'entreprise va concrètement faire des résultats.

## Slide 9 (84 mots)

Voici un cas d'usage typique, la prédiction de la résiliation des clients, que l'on appelle churn. On segmente les clients selon leur probabilité prédite de résiliation. Les clients à très haute probabilité reçoivent une action de rétention ciblée, par exemple une offre personnalisée, coûteuse mais justifiée. Les clients à faible probabilité ne nécessitent aucune action immédiate. Cette démarche montre comment un modèle de classification, correctement évalué et interprété, transforme une prédiction statistique en véritable levier de décision opérationnel. Les ressources sont ainsi bien ciblées.

## Slide 10 (90 mots)

Retenons les points clés. La matrice de confusion permet de calculer la précision, le rappel, le F un score et l'exactitude, chacun éclairant un aspect différent de la qualité du modèle. L'exactitude globale peut être trompeuse lorsque les catégories sont déséquilibrées, et le choix de la métrique dépend du coût relatif des faux positifs et des faux négatifs. La courbe ROC et l'AUC résument la capacité de séparation, indépendamment du seuil. Enfin, une classification ne prend sa pleine valeur que traduite en action, selon le contexte et les coûts métier.

## Slide 11 (97 mots)

Voici les corrigés. Un, avec un pour cent de fraudes, un modèle qui déclare toutes les transactions légitimes atteint déjà quatre-vingt-dix-neuf pour cent d'exactitude, sans détecter une seule fraude. Ce résultat ne prouve donc rien. On préférera le rappel, le F un score ou l'AUC. Deux, en dépistage préliminaire, manquer un malade est bien plus grave qu'un examen de confirmation inutile. On privilégie donc le rappel, quitte à perdre en précision. Trois, une AUC de zéro virgule quatre-vingt-douze indique une bien meilleure capacité de séparation qu'une AUC de zéro virgule soixante-dix-huit, quel que soit le seuil retenu.
