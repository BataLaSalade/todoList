12/06/2019
- Ajout d'une condition pour vérifier si l'ID du nouvel item est unique avant de le sauvegarder. Tant qu'il n'est pas unique, on en crée un nouveau. Store.prototype.save()

07/06/2019
- Ajout des fichiers Jasmine dans node-modules afin de pouvoir lancer les TU
- Refacto de la méthode View.prototype.bind : remplacement d'une succession de if / else if par un switch

23/05/2019
- Suppression des fichiers CSS dans le .gitignore
- Ajout d'un changelog.md pour suivre les correctifs in-app

13/05/2019
- Correction typo sur la methode addItem() du controller. Cette methode permet d'ajouter une tache dans la liste
- Ajout des images svg correspondants aux deux etats de la checkbox et modification du path en conséquence