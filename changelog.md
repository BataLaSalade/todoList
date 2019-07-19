09/07/2019
- 

04/07/2019
- Remplacement des simples quotes par des doubles quotes dans le fichier de test

02/07/2019
- Dans la classe Template, supression d'une variable local pour stocker la taille du tableau ce qui alourdi le code
- [TU] Test du chargement de la page, tous les todos doivent être afficher sans être filter. Pour cela, on paramètre la vue à afficher avec subject.setView("") sans paramètre et on test l'appel de la méthode View.prototype.render() avec la commande correspondant "showEntries" et la donnée à afficher
- [TU] Test du routing, lorsque l'on charge l'url #/active, les todos actives doivent être affichées. Pour cela, on paramètre la vue à afficher avec subject.setView("") et la fin de l'URL correspondant, puis on teste l'appel View.prototype.render() avec la commande correspondant "showEntries" et la donnée à afficher
- [TU] Test de la mise en avant des éléments filtrés : Mise en avant de TOUS les éléments. Paramétrage de la vue avec subject.setView("") sans paramètre. Test de la méthode View.prototype.render() avec la commande correspondant au filtre "setFilter" et sans paramètre pour afficher tous les todos.
- [TU] Test de la mise en avant des éléments filtrés : Mise en avant des todos "Active". Paramétrage de la vue avec subject.setView("#/active") sans paramètre. Test de la méthode View.prototype.render() avec la commande correspondant au filtre "setFilter" avec le paramètre "active".
- [TU-Ajout] Test de la mise en avant des éléments filtrés : Mise en avant des todos "COMPLETED". Paramétrage de la vue avec subject.setView("#/completed"). Test de la méthode View.prototype.render() avec la commande correspondant au filtre "setFilter" avec le paramètre "completed".

21/06/2019
- Dans la classe Store, modification de la méthode Store.prototype.remove() : Deux boucles for étaient utilisé pour parcourir le tableau. Une fois pour trouver l'id d'un todo et le stock en local. La deuxieme boucle sur la tableau permettait de retrouver la todo avec l'ID précédemment trouvé et la supprimer du tableau. Une seule boucle sur le tableau, avec une condition "si l'id de l'item est = à l'id passé en paramètre de la méthode alors supprime l'item"

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