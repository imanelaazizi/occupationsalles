$('a').removeClass('active');
$('a:contains(Statistiques)').addClass('active');
$("#main-content").load("page/statistiques.html");

function show(page) {
	if (page == 'produit') {
		$('a').removeClass('active');
		$('a:contains(Produit)').addClass('active');
		$("#main-content").load("page/produit.html");

		event.preventDefault();
	}
	if (page == "statistiques") {
		$('a').removeClass('active');
		$('a:contains(Statistiques)').addClass('active');
		$("#main-content").load("page/statistiques.html");
		event.preventDefault();
	}
	if (page == "statistiques2") {
		$('a').removeClass('active');
		$('a:contains(Statistiques2)').addClass('active');
		$("#main-content").load("page/statistiques2.html");
		event.preventDefault();
	}
	if (page == "marques") {
		$('a').removeClass('active');
		$('a:contains(Marques)').addClass('active');
		$("#main-content").load("page/marque.html");
		event.preventDefault();
	}
	if (page == "machines") {
		$('a').removeClass('active');
		$('a:contains(Machines)').addClass('active');
		$("#main-content").load("page/machine.html");
		event.preventDefault();
	}
	if (page == "salles") {
		$('a').removeClass('active');
		$('a:contains(Salles)').addClass('active');
		$("#main-content").load("page/salle.html");
		event.preventDefault();
	}
	if (page == "sallesv") {
		$('a').removeClass('active');
		$('a:contains(Sallesv)').addClass('active');
		$("#main-content").load("page/sallev.html");
		event.preventDefault();
	}
	if (page == "blocs") {
		$('a').removeClass('active');
		$('a:contains(Blocs)').addClass('active');
		$("#main-content").load("page/bloc.html");
		event.preventDefault();
	}
	if (page == "crenauxs") {
		$('a').removeClass('active');
		$('a:contains(Creneauxs)').addClass('active');
		$("#main-content").load("page/crenaux.html");
		event.preventDefault();
	}
	if (page == "crenauxsv") {
		$('a').removeClass('active');
		$('a:contains(Creneauxsv)').addClass('active');
		$("#main-content").load("page/crenauxv.html");
		event.preventDefault();
	}
	if (page == "crsalles") {
		$('a').removeClass('active');
		$('a:contains(Reservation)').addClass('active');
		$("#main-content").load("page/crsalle.html");
		event.preventDefault();
	}
	if (page == "user") {
		$('a').removeClass('active');
		$('a:contains(user)').addClass('active');
		$("#main-content").load("page/user.html");
		event.preventDefault();
	}
}
