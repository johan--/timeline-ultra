'use strict';

angular
  .module('ultraApp')
  .factory('timelineData', function() {

    /*
    {
      year: 20,
      tags: [],
      title: "",
      desc: ""
    }

    // faculty website, angularjs
    // Instagram clock? 
    // Portfolio share? 
    // Gridster arrange
    // http://www.shakingthrough.com/
    // Liberty resources? 
    // Info graphics galore!

    */

    return [{
      year: 2014,
      tags: ['openFrameworks'],
      title: "ofxAddons co-maintainer",
      desc: "Started helping to maintain ofxAddons and plan new features. <a href='http://ofxaddons.com'>visit ofxAddons</a>"
    }, {
      year: 2014,
      tags: ['openFrameworks'],
      title: "MIT Transform Table",
      desc: "Developed software interface for MIT shape-shifting TRANSFORM table. Table was shown in Milan and sponsored by Lexus. View at <a href='http://tangible.media.mit.edu/project/transform/'>MIT Media Lab</a>. Featured on <a href='http://www.wired.com/2014/04/mit-whizzes-invent-magical-transforming-furniture/'>Wired</a> Watch on <a href='https://vimeo.com/91406395'>Vimeo</a>"
    }, {
      year: 2014,
      tags: ['nodejs', 'angularjs', 'mongodb', 'javascript'],
      title: "Personal Timeline",
      desc: "An updated website to show my work over the years. Built using the Angular FullStack <a href='https://github.com/DaftMonk/generator-angular-fullstack'>Yeoman Generator</a>"
    }, {
      year: 2014,
      tags: ['LEGO'],
      title: "Competed in LEGOLand Discovery Center's Brick Factor",
      desc: "Competed in Brick Factor, a LEGO building competition and placed in the top ten. Event challenges LEGO masters to build around a central theme, using limited parts, in under 1 hour. Read more on <a href='http://www.boston.com/yourtown/2014/01/27/boston-lego-master-model-builder-crowned/EWuegEJ8241AYNtjdUwjuJ/pictures.html?pg=7#slide-7'>Boston.com</a> and <a href='http://www.bostonmagazine.com/arts-entertainment/blog/2014/01/27/legoland-discovery-center-boston-master-model-builder-competition/'>Boston Magazine</a>"
    }, {
      year: 2014,
      tags: ['javascript'],
      title: "Web Browser Blink detection",
      desc: "Blink detection using javascript and canvas only. Work in progress, view on <a href='https://github.com/facultymatt/tracking.js/tree/features/track-blink'>Github</a>. Addon for tracking.js library. Based on tracking method found <a href='http://gddbeijing.appspot.com/blink.html'>here</a>. Follow progress on <a href='https://trello.com/b/3ZQiDFcC/blinky'>Trello</a>."
    }, {
      year: 2014,
      tags: ['TDD', 'angularjs', 'nodejs', 'javascript'],
      title: "Developed large scale, test driven AngularJS app",
      desc: "Managed agile team to develop AngularJS app for large public corporation. The app was built to consume existing API and push services. Testing is done with Karma, Protractor, and SauceLabs. Code is private. Project will be released late 2014."
    }, {
      year: 2014,
      tags: ['angularjs', 'javascript'],
      title: "AngularPad - Layout PDF's using html and css",
      desc: "I find it much faster and more intuitive to layout pages using html and css instead of programs like inDesign. I built an app to do just this. It uses AngularJS and a markdown directive for layout. Then, pages are printed to pdf using a PhantomJS webserver. Code soon on Github."
    }, {
      year: 2014,
      tags: ['jquery', 'TDD', 'javascript'],
      title: "Explore a large image through a smaller window",
      desc: "jQuery plugin for zooming into images and panning with your mouse. The interaction allows the user to explore a large image through a smaller window. Code on Github soon."
    }, {
      year: 2013,
      tags: ['javascript', 'nodejs'],
      title: "A NodeJS module for easily sending html formatted emails",
      desc: "Easily send emails from your Mean.io app. Emails are formatted using html and css. Code on Github soon."
    }, {
      year: 2013,
      tags: ['angularjs', 'TDD', 'geolocation', 'mongodb', 'javascript'],
      title: "MarlinApps GeoLocater Tool",
      desc: "Developed AngularJS Google Map interface for searching database of thousands of vendors. Vendors are stored in MongoDB and managed through custom admin panel. Code is private."
    }, {
      year: 2013,
      tags: ['api', 'angularjs', 'mongodb', 'nodejs', 'TDD', 'javascript'],
      title: "LeaseRep, powered by MarlinApps",
      desc: "Worked with Marlin Leasing business finance company to bring to life a new vision for their quoting and application tools. Platform was developed using modern stack and agile process. Learn more at <a href='https://www.leaserep.com/welcome'>LeaseRep.com</a>"
    }, {
      year: 2013,
      tags: ['presentation', 'javascript', 'openFrameworks'],
      title: "Browser based art - an opportunity for artists",
      desc: "Presentation at the Hacktory about the opportunities of javascript and the browser for artists. Discussed openFrameworks and openCV and new javascript/ canvas based approaches to openCV methods. View presentation on <a href='http://prezi.com/uzcbnccw2xxf/?utm_campaign=share&utm_medium=copy&rc=ex0share'>Prezzi</a>"
    }, {
      year: 2013,
      tags: ['website', 'jquery', 'nodejs', 'javascript'],
      title: "Personal Portfolio of Stockard Simon",
      desc: "Developed website using Apostrophe CMS, a revolutionalty CMS built with NodeJS and MongoDB. Visit <a href='http://www.stockardsimon.com/'>stockardsimon.com</a> and learn more about <a href='http://demo2.apostrophenow.com/'>Apostrophe</a>"
    }, {
      year: 2013,
      tags: ['website', 'jquery', 'javascript'],
      title: "Fiore Design Wesbite",
      desc: "Developed website for a local design company. Visit <a href='http://fioredesign.net/'>Fiore Design</a>"
    }, {
      year: 2013,
      tags: ['angularjs', 'javascript', 'mongodb'],
      title: "ngPages module",
      desc: "A module that makes it easy to design web pages with persistant content. View the project on <a href='https://github.com/facultymatt/mean-pages'>Github</a>. Inspired by Apostrophe's page and area concept."
    }, {
      year: 2013,
      tags: ['TDD', 'angularjs', 'javascript'],
      title: "Unsaved changed directive",
      desc: "AngularJS directives that prompt user to save their changes when navigating away from a page. View on <a href='https://github.com/facultymatt/angular-unsavedChanges'>Github</a>"
    }, {
      year: 2013,
      tags: ['angularjs', 'nodejs', 'javascript', 'mongodb'],
      title: "CrocktoberFest Voting App",
      desc: "Prototyped simple voting app using FireBase to provide real-time backend. App allowed multiple judges to vote for multiple contestants. View on <a href='https://github.com/facultymatt/crocktoberfest'>Github</a>"
    }, {
      year: 2013,
      tags: ['api', 'php', 'jquery', 'javascript'],
      title: "BizVizz: Corporate Accountability App",
      desc: "Early user experience and API / web development to support this award winning app. Download from the appstore by visiting <a href='http://bizvizz.com/'>bizvizz.com</a>. Read press on <a href='http://www.phillygeekawards.com/previous-winners/'>Philly Geek Awards</a> and <a href='http://technical.ly/'>Technical.ly Philly</a>"
    }, {
      year: 2013,
      tags: ['api', 'nodejs', 'jquery', 'javascript'],
      title: "My Favorite Meme",
      desc: "Real time instagram API app that let users contribute their favorite meme. Process on <a href='http://instagram.com/p/RbkiRrtY8-/'>Instagram</a>"
    }, {
      year: 2013,
      tags: ['construct 2', 'javascript', 'game'],
      title: "Town of Songs 2013",
      desc: "Developed HTML5 interactive for the band Edward Sharpe and the Magnetic Zeros with touch screen support. Visit <a href='http://townofsongs.com/'>Town Of Songs</a>"
    }, {
      year: 2012,
      tags: ['jquery', 'php', 'javascript'],
      // website, template, plugins,
      title: "BDDW",
      desc: "Developed bespoke website for bespoke furniture company. Custom admin interface was developed for managing products. Visit <a href='http://bddw.com/'>BDDW</a>"
    }, {
      year: 2012,
      tags: ['construct 2', 'javascript', 'game'],
      //, 'game', 'develop', 'design'
      title: "Town of Songs 2012",
      desc: "Developed HTML5 interactive for the band Edward Sharpe and the Magnetic Zeros using Construct 2 software."
    }, {
      year: 2012,
      tags: ['php', 'jquery', 'javascript'],
      // 'platform', 'scale', 'cloud', 'php', 'develop'
      title: "Blank You Very Much",
      desc: "Co-developed crowd-sourced design platform for client. Over 2.5 million page views in 2013, 6000+ daily page views, 32,000+ users, 3 million points awarded. <a href='http://www.blankyouverymuch.com'>blankyouverymuch.com</a>"
    }, {
      year: 2012,
      tags: ['api', 'game', 'angularjs', 'javascript'],
      //, 'realtime', 'app', 'develop'
      title: "Poasty App",
      desc: "Develop realtime, instagram-like API for sharing photos and posts in your school. Learn more at <a href='http://www.poastyapp.com/welcome'>PoastyApp</a>"
    }, {
      year: 2012,
      tags: ['angularjs', 'javascript'],
      title: "Faculty Creative Website",
      desc: "Company website to showcase our work. Built with AngularJS. No longer active."
    }, {
      year: 2012,
      tags: ['game', 'api'],
      // , 'realtime', 'develop'
      title: "Poasty Gamify",
      desc: "Developed activity stream class modeled after research into Facebook and Etsy activity feed design patterns. Developed gamify class that awards badges based on number of actions, certain action combinations, and other configurations."
    }, {
      year: 2011,
      tags: ['openFrameworks'],
      // , 'design', 'develop'
      title: "Faculty Kinect",
      desc: "Using the kinect to manipulate logos and images."
    }, {
      year: 2011,
      tags: ['demonstration', 'exhibition', 'openFrameworks'],
      title: "PIXEL at the Test Zone - The Tech Virtual, San Jose, CA",
      desc: "Presented and had exhibit installed with colleague at museum. View the exhibit on <a href='http://thetechopensource.thetech.org/requests/tech-test-zone-2011'>Tech Virtual</a>. Read press on <a href='http://www.cnet.com/pictures/future-tech-exhibit-plugs-museum-interactivity-photos/7/'>CNET</a>"
    }, {
      year: 2011,
      tags: ['website', 'php', 'jquery', 'javascript'],
      //  'design', 'develop'
      title: "mmWorks (personal website from 2010-2014)",
      desc: "My personal website for a few years <a href='http://mmworks.mattmillerart.com/'>mmWorks</a>"
    }, {
      year: 2011,
      tags: ['print', 'exhibition'],
      title: "Try your hand at thinkering - The Gallery, Philadelphia, PA",
      desc: "Exhibition where participants were invited to take apart common items discover what parts they will find inside."
    }, {
      year: 2011,
      tags: ['LEGO', 'publication', 'print'],
      title: "Build Play Learn - Masters of Industrial Design Thesis",
      desc: "How can we cultivate thinkering and systematic creativity in children in a digital world? Read the <a href='http://issuu.com/mid_uarts/docs/buildplaylearn'>documentation</a>"
    }, {
      year: 2011,
      tags: ['openFrameworks'],
      title: "Thinkering Stories - Connecting physical drawings to digital videos.",
      desc: "Prototyped app that allowed students to record videos explaining their drawings and then connect the drawings to those videos in the digital space. Later, they could view the video by showing the camera the drawing. App used openFrameworks for image recognition (using FERN method) and LiveCode for video playing."
    }, {
      year: 2011,
      tags: ['LEGO'],
      // 'teaching', 'event', 'collaboration'
      title: "Started Gadgets and Kinetics for children ages 8-10 years old.",
      desc: "A Collaboration with Fleisher Art Memorial, MID@UArts, The Hacktory, and colleague Jake Wells, We started an after school class where children learned to use real tools to take apart common household appliances. Students then built new creations with the parts. We developed projects and curriculum to cultivate systematic creativity."
    }, {
      year: 2011,
      tags: ['LEGO'],
      title: "LEGO Workshop",
      desc: "I recreated the fabrication shop from the Industrial Design Department at the University of the Arts (where I did my graduate studies) using the LEGO digital designer program. <a href='/projects/lego-fabrication-shop'>Explore the workshop</a>"
    }, {
      year: 2010,
      tags: ['print', 'openFrameworks', 'exhibition'],
      title: "Design Does",
      desc: "Designed exhibit to showcase various eye tracking demos."
    }, {
      year: 2010,
      tags: ['openFrameworks'],
      title: "Eye tracking from laptop webcams",
      desc: "Prototyped software to perform eye tracking from low cost, commonly available laptop webcams."
    }, {
      year: 2010,
      tags: ['print', 'publication'],
      // accessibility
      title: "Liberty Resources Contacted Designer",
      desc: "Worked with local advocacy organization on various human-centered design projects. View the <a href='http://issuu.com/mid_uarts/docs/liberty_communications'>compiled research</a>."
    }, {
      year: 2010,
      tags: ['demonstration', 'openFrameworks'],
      // , 'build', 'develop'
      title: "Museums and the Web Conference; Eye Tracking With Your MacBook",
      desc: "Hacking against eye tracking software for your macbook laptop"
    }, {
      year: 2010,
      tags: ['physical prototype'],
      title: "Tactile iPad Keyboard",
      desc: "Prototyped concept for tactile iPad keyboard based on Apple patents"
    }, {
      year: 2010,
      tags: ['physical prototype'],
      // , 'collaboration', 'build', design', 
      title: "Air Cooperation",
      desc: "Design charrette where I worked with a team of grad and undergrad to design a musical collaboration tool."
    }, {
      year: 2010,
      tags: ['website', 'drupal', 'php', 'jquery', 'javascript'],
      // 'design', 'develop', 
      title: "MID@Uarts Website",
      desc: "Developed website for graduate program (summer)"
    }, {
      year: 2009,
      tags: ['drupal', 'php', 'jquery', 'javascript'],
      // 'hackathon', 'design', 'develop', 'collaboration', 
      title: "RantCloud",
      desc: "Baltimore hackathon entry with colleges Jake and Mike. Used a speech to text service to capture users voice mail responses to a question we asked."
    }, {
      year: 2009,
      tags: ['website', 'jquery', 'javascript'],
      // , 'campaign', 'collaboration', 'design', 
      title: "Cheers, Philly",
      desc: "Website to promote local consumption of local beer!"
    }, {
      year: 2009,
      tags: [],
      title: "Collaboration: A Love Story",
      desc: "A play to investigate collaboration in our school"
    }, {
      year: 2009,
      tags: ['openFrameworks'],
      // 'research', 'open-source', 'collaboration', 
      title: "Open-Source Eye Tracking Research",
      desc: "Started Hacking the Eye Writer and OpenFrameWorks software."
    }, {
      year: 2008,
      tags: ['website', 'drupal', 'php', 'jquery', 'javascript'],
      title: "ResourceLA site",
      desc: "Website for Los Angelus based talent agency. Collaboration with Cheng+Snyder. Visit <a href='http://resourcela.com/'>ResourceLA</a>"
    }, {
      year: 2008,
      tags: ['print'],
      // print design branding campaign
      title: "Smithville Barber Shoppe",
      desc: "Designed various print and promotional items for local barber shop."
    }, {
      year: 2008,
      tags: ['print', 'exhibition'],
      title: "A Cut Above - Stockton College, Pomona, NJ",
      desc: "Visual narrative assembled for capstone visual design project."
    }, {
      year: 2007,
      tags: ['php', 'jquery', 'javascript'],
      title: "PMS (Portfolio Management System)",
      desc: "PHP site generated from folder structure, images, and text files - no database needed!"
    }, {
      year: 2007,
      tags: ['jquery', 'javascript'],
      title: "First portfolio site",
      desc: "Very first portfolio site and jquery project! How old school!"
    }];

    // Instagram clock? 
    // Portfolio share? 
    // Gridster arrange
    // angular Unsaved Changes
    // http://www.shakingthrough.com/
    // Liberty resources? 
    // Info graphics galore! 
  });
