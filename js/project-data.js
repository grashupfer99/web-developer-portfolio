/***************************************************************************************************************/
var projects = {
    'project-1': {
        'project-title': 'Project 1',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
	'project-2': {
        'project-title': 'Project 2',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
	'project-3': {
        'project-title': 'Project 3',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
	'project-4': {
        'project-title': 'Project 4',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
	'project-5': {
        'project-title': 'Project 5',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
		'project-6': {
        'project-title': 'Project 6',
        'project-subtitle': 'HTML, CSS, Responsive Design',
        'desc-1': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus velit nec sem condimentum hendrerit.',
        'desc-list': ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
        'desc-2': false,
        'github': false,
        'url': false,
        'request-url': true
    },
    
};
/***************************************************************************************************************/

function setMarkup(i) {
    var markup = '';
    
    markup += '<li class="project">';
    markup += '<span class="project__title">';
    markup += projects['project-' + (i + 1)]['project-title'];
    markup += '<span class="project__title--subtitle">';
    markup += projects['project-' + (i + 1)]['project-subtitle'] + '</span>';
    markup += '</span>';
    
    markup += '<div class="project-img" style="background:url(img/sub/projects/project-default.jpg) no-repeat;background-size:cover;">';
    markup += '</div>';
    markup += '<button type="button" class="project__btn" data-btn="' + (i + 1) + '">More</button>';
    
    markup += '<div class="project' + (i + 1) + '-modal">';
    markup += '<div class="inner-modal-img">';
    markup += '<img src="img/sub/projects/project-default.jpg" alt="' + projects['project-' + (i + 1)]['project-title'] + '"></div>';
    markup += '<h1>' + projects['project-' + (i + 1)]['project-title'] + '</h1>';
    markup += '<p>' + projects['project-' + (i + 1)]['desc-1'] + '</p>';
    
    // Check if 'desc-list' is empty
    if ((projects['project-' + (i + 1)]['desc-list']) !== false) {
        markup += '<ul>';
        for (var j = 0; j < projects['project-' + (i + 1)]['desc-list'].length; j++) {
            markup += '<li><i class="fa fa-circle"></i>';
            markup += projects['project-' + (i + 1)]['desc-list'][j] + '</li>';
        }
        markup += '</ul>';
    }
    
    // Check if 'desc-2' is empty
    if ((projects['project-' + (i + 1)]['desc-2']) !== false)
        markup += '<p>' + projects['project-' + (i + 1)]['desc-2'] + '</p>';
    
        markup += '<div class="inner-url">';
    // Check if 'github' is empty
    if ((projects['project-' + (i + 1)]['github']) !== false) {
        markup += '<a href="' + projects['project-' + (i + 1)]['github'] + '"' + 'target="_blank">';
        markup += '<i class="fab fa-github"></i></a>';
    }

    // Check if 'url' is empty
    if ((projects['project-' + (i + 1)]['url']) !== false) {
        markup += '<a href="' + projects['project-' + (i + 1)]['url'] + '"' + 'target="_blank">';
        markup += '<i class="fa fa-link"></i></a>';
    }

    // Check if 'request-url' is empty
    if ((projects['project-' + (i + 1)]['request-url']) !== false) {
        markup += '<a href="javascript:;" class="link-request"><i class="fa fa-link"></i>Available upon request</a>';
    }

    markup += '</div></div>';
    markup += '</li>';
    
    return markup;
}

(function displayMarkup() {
    var projectsContainer = document.querySelector("ul.projects");
    for (var i = 0; i < Object.keys(projects).length; i++) {
        projectsContainer.innerHTML += setMarkup(i);
    }
}) ();