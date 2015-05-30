var bio = {
	"name":"Wesley Vasquez",
	"role":"Web Developer",
	"message":"Hi I'm Wesley and I'm a young creative engineer student",
	"contacts":{
		"mobile":"0995988138",
		"email":"wes9319_rhcp@hotmail.com",
		"github":"wes9319",
		"twitter":"@wesleyv2",
		"location":"Quito"
	},
	"skills":["creative","smart","teacher","programer","designer"],
	"biopic":"http://placekitten.com/g/387/315"
}

bio.display = function()
{
		var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedTwitter=HTMLtwitter.replace("%data%",bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedTwitter);
		var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);
		
var formattedBioPic=HTMLbioPic.replace("%data%",bio.biopic);
$("#header").append(formattedBioPic)
var formattedMessage=HTMLwelcomeMsg.replace("%data%",bio.message);
$("#header").append(formattedMessage);

if (bio.skills.length>0)
{
	$("#header").append(HTMLskillsStart);
	var formattedSkills=HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills=HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills=HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills=HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkills);
	formattedSkills=HTMLskills.replace("%data%",bio.skills[4]);
	$("#skills").append(formattedSkills);
}

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
}
bio.display();

////////////////////////////////////////////////////////////////////////////////////////

var education =
{
	"schools":[
	{
		"name":"usfq",
		"location":"Quito",
		"degree":"BA",
		"majors":["Electronic"],
		"dates":2014,
		"url":"http://www.usfq.edu.ec"
	}
	],
	"onlineCourses":[
	{
		"title":"front end web developer",
	    "school":"udacity",
	    "dates":2015,
	    "url":"www.udacity.com"
	}	
	]
}

education.display = function () 
{
	for( edu in education.schools)
	{
		$("#education").append(HTMLschoolStart);
	
		var formattedName=HTMLschoolName.replace("%data%",education.schools[edu].name);
		
		var formattedDegree=HTMLschoolDegree.replace("%data%",education.schools[edu].degree);
		
		var formattedNameDegree = formattedName + formattedDegree;
		$(".education-entry:last").append(formattedNameDegree);	
		
		var formattedLocation=HTMLschoolLocation.replace("%data%",education.schools[edu].location);
		$(".education-entry:last").append(formattedLocation);
		
		var formattedDates=HTMLschoolDates.replace("%data%",education.schools[edu].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedMajor=HTMLschoolMajor.replace("%data%",education.schools[edu].majors);
		$(".education-entry:last").append(formattedMajor);
	}
	
	for( edu in education.onlineCourses)
	{
		$(".education-entry:last").append(HTMLonlineClasses);
		
		var formattedTitle=HTMLonlineTitle.replace("%data%",education.onlineCourses[edu].title);
		
		var formattedSchool=HTMLonlineSchool.replace("%data%",education.onlineCourses[edu].school);
		
		var formattedTitleSchool=formattedTitle+formattedSchool;
		$(".education-entry:last").append(formattedTitleSchool);
		
		var formattedDates=HTMLonlineDates.replace("%data%",education.onlineCourses[edu].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedURL=HTMLonlineURL.replace("%data%",education.onlineCourses[edu].url);
		$(".education-entry:last").append(formattedURL);
	}
}
education.display();

/////////////////////////////////////////////////////////////////////////////////////////

var work = 
{
	"jobs":[
	{
		"employer":"spae",
		"title":["teacher", "web developer", "designer"],
		"location":"Quito",
		"dates":"june-2014 to present",
		"description":"My job is about teaching to people who wants to go to the university or needs help with their homework"
}
	]
}

work.display = function(){
for (job in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	
	var formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle=formattedEmployer+formattedTitle;
	var formattedDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDescription);
}
}
work.display();

////////////////////////////////////////////////////////////////////////////////////////

var projects=
{
	"projects":[
	{
		"title":"build a portfolio site",
		"dates":"april 2015",
		"description":"build a portfolio site using html and css",
		"image":["http://placekitten.com/g/197/148","http://placekitten.com/g/197/148"]
	},
	{
		"title":"example proj 2",
		"dates":"example date 2",
		"description":"example description 2",
		"image":["http://placekitten.com/g/197/148","http://placekitten.com/g/197/148"]
	}
	]
}
projects.display = function () 
{
	for(project in projects.projects)
	{
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle=HTMLprojectTitle.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle)
		
		var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		
		var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].image.length > 0) 
		{
			for (images in projects.projects[project].image)
			{
				var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].image[images]);
		$(".project-entry:last").append(formattedImage);
			}
		}
	}
}
projects.display();

/////////////////////////////////////////////////

$("#mapDiv").append(googleMap);

////////////////////////////////////////////////

function inName(name) {
  name = bio.name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+name[1];
}

$("#main").append(internationalizeButton);