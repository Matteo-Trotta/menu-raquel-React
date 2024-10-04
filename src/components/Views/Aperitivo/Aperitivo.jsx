import "./Aperitivo.css";

export default function Aperitivo() {
  let Aperitivi = [
    {
      id: 1,
      title: "Menù 13 €",
      body: "Sushi Roll | Nachos | Drink",
      img: "/IMG sito/sushi-raquel-neon.jpg", 
    },
    {
      id: 2,
      title: "Menù 15 €",
      body: "Sushi Roll | Nachos | Tempura Veggy | Drink",
      img: "/IMG sito/aperitivo-2.jpg", 
    },
    {
      id: 3,
      title: "Menù 20 €",
      body: "Sushi Roll | Gamberi in Tempura | Nigiri Salmone | Drink",
      img: "/IMG sito/aperitivo-3.jpg", 
    },
  ];

  return (
    <>
      <div className="container spicy-rice-regular">
        <div className="row text-center justify-content-center align-items-center m-2 p-0">
          <div className="col-12 mt-5">
            <h1 className="text-warning">Aperitivo</h1>
            <p className="text-warning fs-4 mt-3">
              Scegli la formula per il tuo aperitivo
            </p>
          </div>
        </div>
      </div>

      {Aperitivi.map((aperitivo) => (
        <div className="container-fluid" key={aperitivo.id}>
          <div className="row justify-content-center m-0">
            <div className="col-10 col-md-6">
              <div className="card bg-transparent border-0 mt-5 text-center">
                <div className="contenitoreImmagini">
                  <img
                    src={aperitivo.img}
                    className="object-fit-cover cardImg p-1"
                    alt={aperitivo.title}
                  />
                </div>


                <div className="card-body p-0">
                  <h2 className="card-text text-warning fs-1 spicy-rice-regular">
                    {aperitivo.title}
                  </h2>
                  <p className="card-body text-warning fs-2 spicy-rice-regular">{aperitivo.body}</p> 
                <hr className="text-warning border-2 opacity-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}