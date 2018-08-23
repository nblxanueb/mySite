import React from 'react';
import { render } from 'react-dom';
import Header from './header';
import Skills from './skills';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './slider-animations.css';
import { SocialIcon } from 'react-social-icons';
import Typing from 'react-typing-animation';
import './styles.css';

const content = [
	{
		title: 'Farm Choir',
		description:
		'An interactive sound match memory game for kids based on jQuery  and DOM manipulation.',
		url: 'http://peaceful-pasteur-af9ae7.bitballoon.com/',
		image: 'https://farm1.staticflickr.com/924/29769608388_c822b074d3_z.jpg',
	},
	{
		title: 'iBeen',
		description:
		'A place for all your travel memories; full stack CRUD application using Node and Express and Google Maps API.',
		url: 'http://ibeen.herokuapp.com/',
		image: 'https://farm1.staticflickr.com/938/29769607608_26c8e89971_z.jpg',
	},
	{
		title: 'eas-E-mart',
		description:
		'An online classified advertisements website with items for sale. A group project using Express/React and Google Maps API.',
		url: 'http://eas-e-mart.herokuapp.com/',
		image: 'https://farm1.staticflickr.com/841/29769607898_518ac84070_z.jpg',
	},
  	{
		title: 'date Grub',
		description:
		'An app to find the perfect spot for a date. Powered by Yelp Fusion and Google Maps API.',
		url: 'http://date-grub.herokuapp.com/',
		image: 'https://farm1.staticflickr.com/942/43592026582_db7420aaae_z.jpg',
	},
  	{
		title: 'Tic Tac Toe',
		description:
		'A classic Tic Tac Toe game based on Javascript and DOM manipulation.',
		url: 'http://awesome-visvesvaraya-bac61e.bitballoon.com/',
		image: 'https://farm1.staticflickr.com/844/41831398880_670a1661a2_z.jpg',
	}
];

const App = () => (
	<div>
		<Header />
		<div className="wrapper">
    <div className="about">
		<Typing>
			<h2>Hi, I'm Andrey!</h2>
		</Typing>
      <h3>I'm a full stack web developer with a passion for design and visualization as well as creating user-friendly and interactive interfaces.
      I was previously a Hospital Corpsman in the US Navy and was stationed in DC and Guam, but after returning to NYC I decided to transition my career to IT field and got my BSc in Computer Science at CUNY John Jay College of Criminal Justice in 2017.</h3>
      <h3>I love technology and always love to get to the bottom of everything, see how everything works. I also love foreign languages and think of coding as speaking in a foreign language, sort of… I love to code because it allows me create cool stuff that can be shared with others around the world!</h3>
      <h3>My favorite framework right now is React.js on the frontend and Ruby on Rails on the backend. I am also very interested in data visualization and currently trying to learn D3. I have also worked with Flexbox, Node.js,  Express, jQuery, PostgreSQL, CSS, and C++. </h3>
      <h3>In my spare time I like to cook or hang out with my friends or just stay at home and play video games or watch documentaries on Netflix. I love to travel and try to go somewhere new whenever I get a chance, if only for a weekend. My favorite hobby is scuba diving. I’m also a big fan of underwater photography, especially macro; you can check out some of my photos <a href="https://www.flickr.com/photos/pykhantsev/" className="flickr">here.</a></h3>
    </div>

		<Skills />
			<p>
			</p>
		</div>
    <div className="carousel">
          <h2 className="projects"> Projects: </h2>

		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
            <button><a href={item.url}>view</a></button>
					</div>
				</div>
			))}
		</Slider>
    </div>
    <div className="contact">
      <div>
        <h2> contact information: </h2>
      </div>
      <div>
        <SocialIcon url={`https://www.linkedin.com/in/andrey-pykhantsev/`} />
        <SocialIcon className="icon" url={`https://github.com/nblxanueb`} />
        <SocialIcon className="icon" url={`https://www.flickr.com/photos/pykhantsev/`} />
        <SocialIcon className="icon" url={`https://codepen.io/pykhantsev/`} />
        <SocialIcon className="icon" url={`mailto:a.e.pykhantsev@gmail.com`} />
    </div>
    </div>

	</div>
);

render(<App />, document.getElementById('root'));
