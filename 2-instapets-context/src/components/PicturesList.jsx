import InstagramPost from './InstagramPost'

const getId = ((id = 0) => () => ++id)();

const pictures = [
  { id: getId(), src: "./images/cat.jpeg", caption: "meow!" },
  { id: getId(), src: "./images/dog.jpeg", caption: "arf!" },
  { id: getId(), src: "./images/duck.jpeg", caption: "quack!" },
];

const PicturesList = () => {
  // Create an <InstagramPost /> for each element
  return <ul className='pictures-list'>{
    pictures.map((picture) => <InstagramPost
      key={picture.id}
      picture={picture}
    />)
  }</ul>;
};

export default PicturesList;
