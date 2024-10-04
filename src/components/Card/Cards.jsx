import "./card.css";
import { Link } from "react-router-dom";

let menù = [
  {
    id: 1,
    title: "Aperitivo",
    body: "Scegli il tuo aperitivo",
    img: "../public/IMG sito/Martini-green-glass.jpg",
    time: "Dalle ore 18:00 alle 21:00",
    url: "/aperitivo",
  },
  {
    id: 2,
    title: "Cena",
    body: "Guarda i menù alla carta",
    img: "../public/IMG sito/cena-foto.jpg",
    time: "Cucina aperta fino alle 00:00",
    url: "/cena",
  },
];

export default function Cards() {
  return (
    <>
      {menù.map((menu) => {
        return (
          <div className="container-fluid" key={menu.id}>
            <div className="row justify-content-center m-0">
              <div className="col-10 col-md-6">
                <Link to={menu.url} className="text-decoration-none">
                  <div className="card bg-transparent border-0 mt-5 text-center">
                    <div className="contenitoreImmagini">
                      <img
                        src={menu.img}
                        className="object-fit-cover cardImg p-1"
                        alt={menu.title}
                      />
                    </div>

                    <div>
                      <hr className="text-warning border-2 opacity-100 rounded" />
                    </div>

                    <div className="card-body p-0">
                      <h2 className="card-text text-warning fs-1 spicy-rice-regular">
                        {menu.title}
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
