import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/403571/pexels-photo-403571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic officiis voluptatibus
          molestias. Aspernatur necessitatibus nobis dolor atque, expedita optio?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa hic officiis voluptatibus
          molestias. Aspernatur necessitatibus nobis dolor atque, expedita optio?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusamus nam eligendi
          incidunt cupiditate minima nisi a corrupti labore, totam fuga ex veritatis obcaecati amet,
          veniam molestiae minus libero. Dolor, eveniet quibusdam placeat consequatur in suscipit,
          harum quisquam id repellat mollitia, officiis necessitatibus minima quia amet tenetur
          soluta quod incidunt!
          <br /><br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod doloribus et sapiente quo
            asperiores iste odit exercitationem earum accusantium quae quas corporis voluptatum, ab
            iusto sunt repellendus excepturi, quisquam quidem vero necessitatibus. Natus animi
            doloribus, nemo odio itaque, mollitia voluptatem iure fugiat facilis temporibus quidem.
            Odio temporibus, doloremque veritatis cum blanditiis modi adipisci error, nostrum
            commodi quaerat quod? Illum perspiciatis, praesentium iste velit, possimus repudiandae
            dolor eveniet expedita esse minima maxime eius exercitationem necessitatibus. Iste
            libero aliquam odio consectetur. Magni recusandae ad non minima quam a, laudantium unde
            aut. Asperiores commodi iure, blanditiis illum exercitationem molestias cupiditate
            impedit cum porro.
          </p>
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
