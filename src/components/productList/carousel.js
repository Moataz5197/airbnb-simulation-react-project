import {UncontrolledCarousel} from "reactstrap";



const Carousel =()=>{

    const items = [
        {
          src: 'https://a0.muscache.com/im/pictures/88fd08c5-0699-4b59-9c68-4ada04aea994.jpg?im_w=960',
          altText: '',
          caption: '',
          header: '',
          key: '1'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/5b82cbc2-1cb2-4056-afd9-9f6cdd929cf1.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '2'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/1b66fa00-cc31-4976-81dd-9a991a8b3697.jpg?im_w=720',
          altText: '',
          caption: '',
          header: '',
          key: '3'
        }
      ];

    return(
        <>
            <UncontrolledCarousel  items={items}  />
        </>
    );
}


export default Carousel;