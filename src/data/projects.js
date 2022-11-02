const projects = [
	{
		name: "everyBuddy",
        repo:'https://github.com/everybuddy-lacapsule/everybuddy',
		tech: [
			"Node.js",
			"React Native",
			"Expo",
			"MongoDB",
			"Express",
			"Google maps API",
			"web sockets",
		],
		languages: ["JSX", "CSS", "JavaScript"],
        preview: <iframe width="100%" src='https://www.youtube.com/embed/VKMmkBEYT2Q' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>,
		description:
			"Professional team project built from scratch, exclusive social network for schools' former students including instant messages, interactive map with active search and filters, profile creation and edition, secured authentication, friendlist system handling, NoSQL database.",
	},
	{
		name: "Morning News",
        repo: "",
		preview: <img alt='preview of the app' src="../../logo192.png" />,
		tech: ["Node.js", "React", "MongoDB", "Express", "API"],
		languages: ["JSX", "CSS", "JavaScript"],
        description: 'Training react project, including news API loading and displaying content, wish list systems and secured authentication with NoSQL database.'
	},
	{
		name: "Locapic",
        repo: "",
		preview: "../logo192",
		tech: [
			"Node.js",
			"React Native",
			"Expo",
			"Google maps API",
			"MongoDB",
			"Express",
            "Local Storage"
		],
		languages: ["JSX", "CSS", "JavaScript"],
        description: "First mobile project using expo and Google maps API, authentication, session management using local storage.  "
	},
	{
		name: "FaceUp",
        repo: "",
		preview: "../logo192",
		tech: [
			"Node.js",
			"React Native",
			"Expo",
			"Facial Recognition API",
			"MongoDB",
            "Cloudinary",
			"Express",
		],
		languages: ["JSX", "CSS", "JavaScript"],
        description: "Mobile app using a facial recognition API through native use of the device's camera and temp files upload to cloudinary."
	},
	{
		name: "Mymoviz",
        repo: "",
		preview: "../logo192",
		tech: ["Node.js", "React", "MongoDB", "Express", "API"],
		languages: ["JSX", "CSS", "JavaScript"],
        description: "Single page app displaying the latest trending movies through 'My Movie DB' API with a wishlist, rating & liking interactions."
	},
];

export default projects