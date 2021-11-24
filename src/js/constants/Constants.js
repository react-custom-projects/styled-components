//images
import growTogetherImage from '../../assets/images/illustration-grow-together.svg';
import flowingConversationImage from '../../assets/images/illustration-flowing-conversation.svg';
import yourUsersImage from '../../assets/images/illustration-your-users.svg';

export const theme = {
	colors: {
		header: '#ebfbff',
		body: '#ffffff',
		footer: '#003333',
	},
	mobile: '768px',
};

export const content = [
	{
		id: 1,
		title: 'Grow Together',
		body: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
		image: growTogetherImage,
	},
	{
		id: 2,
		title: 'Flowing Conversations',
		body: "You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",
		image: flowingConversationImage,
	},
	{
		id: 3,
		title: 'Your Users',
		body: "It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",
		image: yourUsersImage,
	},
];
