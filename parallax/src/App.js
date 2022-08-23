import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let stars = document.getElementById("stars");
  let moon = document.getElementById("moon");
  let mountains_behind = document.getElementById("mountains_behind");
  let mountains_front = document.getElementById("mountains_front");
  let text = document.getElementById("text");
  let btn = document.getElementById("btn");

  window.addEventListener("scroll", function () {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + "px";
    moon.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    mountains_front.style.top = value * 0.5 + "px";
    text.style.marginRight = value * 2 + "px";
    text.style.marginTop = value * 1.5 + "px";
    btn.style.marginTop = value * 1.5 + "px";
  });

  return (
    <div className="App">
      <div className="Navbar">
        <Navbar />
      </div>
      <section>
        <img src={require("./images/stars.png")} id="stars" alt="stars" />
        <img src={require("./images/moon.png")} id="moon" alt="moon" />
        <img
          src={require("./images/mountains_behind.png")}
          id="mountains_behind"
          alt="mountains_behind"
        />
        <h2 id="text"> Moon Light </h2>
        <a href="#" id="btn">
          Explore
        </a>
        <img
          src={require("./images/mountains_front.png")}
          id="mountains_front"
          alt="mountains_front"
        />
      </section>
      <div className="sec">
        <h2> Parallax Scrolling EFfects</h2>
        <p>
          Ut esse aute cupidatat voluptate ipsum duis veniam excepteur laborum
          eu irure. Non eu excepteur amet reprehenderit ex cupidatat sint non.
          Adipisicing laboris et minim incididunt quis nostrud in. Quis veniam
          voluptate dolore consectetur aliquip ullamco occaecat et culpa
          officia. Ullamco labore incididunt occaecat cupidatat adipisicing
          culpa. Quis elit ex eu irure cillum exercitation anim exercitation non
          occaecat. Deserunt Lorem magna reprehenderit velit quis mollit
          cupidatat dolor nulla. Cupidatat qui quis aliqua do aliquip nisi est
          amet irure. Sunt ad reprehenderit nisi adipisicing consequat mollit
          qui cupidatat eiusmod eiusmod magna nulla. Pariatur ad enim do amet
          duis esse cupidatat ex. Non ex laboris eu dolore do et aliqua culpa.
          Fugiat dolor reprehenderit fugiat proident labore eu ex pariatur
          cillum consectetur velit anim. Officia mollit magna duis esse est amet
          aliqua. Officia id deserunt in in elit non. Officia ea excepteur
          laborum enim minim consectetur dolore consequat do excepteur ad
          consectetur exercitation culpa. Velit laboris cupidatat magna
          voluptate nisi. Fugiat ipsum irure culpa tempor irure Lorem
          adipisicing nostrud dolor. Culpa consequat Lorem sint aliquip est
          ullamco adipisicing et incididunt. Sint fugiat ad id eiusmod labore et
          sit aute. Minim tempor laboris deserunt aliqua dolor ullamco occaecat
          esse. Incididunt tempor consectetur tempor nulla aute qui nisi laboris
          excepteur do et nostrud et. Occaecat deserunt qui amet nulla laborum
          consectetur ea ut mollit in laboris culpa. Reprehenderit ullamco ea
          nulla qui. Sit duis commodo cillum ex dolore adipisicing tempor cillum
          adipisicing exercitation nostrud amet. Fugiat est reprehenderit cillum
          nulla nulla aute qui duis ea sint laboris sint aute exercitation.
          Laboris eiusmod ad nulla qui eiusmod reprehenderit officia. Nostrud
          sunt magna duis dolore in excepteur. Adipisicing cillum cillum amet ea
          ut quis. Ad elit consectetur labore tempor et deserunt exercitation
          culpa cillum dolore officia dolore do. Do amet commodo officia
          consequat velit eiusmod ea dolor nostrud commodo adipisicing laborum
          ea irure. Enim occaecat cupidatat nisi ipsum. Officia reprehenderit
          tempor irure pariatur occaecat cupidatat ullamco culpa. Eu occaecat
          dolore ad ullamco mollit. Eiusmod aute deserunt sit excepteur magna
          elit consequat laborum incididunt eu labore labore consectetur
          pariatur. Commodo fugiat dolore esse culpa irure sint dolore officia
          non. <br /> <br /> Ipsum minim minim fugiat ut sunt exercitation
          deserunt ex elit qui ea. Voluptate esse laborum irure minim sunt
          ullamco occaecat veniam sint sunt minim anim minim. Sit amet amet et
          pariatur id minim incididunt ea reprehenderit. Ullamco mollit sint
          magna adipisicing duis culpa tempor. Consectetur mollit sit ipsum sit
          consequat fugiat. Velit nostrud voluptate veniam anim excepteur magna
          enim incididunt nostrud incididunt cillum ad nisi. Fugiat voluptate do
          pariatur incididunt in sunt irure qui. <br /> <br /> Consequat fugiat
          nostrud officia et. Nostrud Lorem labore esse ut occaecat sunt.
          Deserunt Lorem velit in consectetur. Velit cupidatat sunt tempor
          eiusmod Lorem cupidatat. Dolor exercitation consequat irure
          consectetur irure nostrud duis officia fugiat. Amet cillum adipisicing
          excepteur culpa velit adipisicing pariatur excepteur consectetur
          labore cupidatat fugiat pariatur. Excepteur exercitation pariatur aute
          ullamco cillum ex in. Enim sunt dolor reprehenderit ea reprehenderit
          deserunt cupidatat ullamco est sit eiusmod adipisicing ullamco. Qui
          duis culpa do dolore sint ipsum incididunt adipisicing non deserunt
          proident velit. Voluptate exercitation amet magna ea deserunt elit
          minim nulla. Ullamco adipisicing commodo enim dolor aliqua commodo
          aute consequat consectetur cupidatat. Commodo nisi aliqua do qui. Sint
          mollit ea culpa dolor minim aliquip qui magna anim ut quis nostrud
          cupidatat enim. Commodo occaecat dolor non deserunt ea. <br /> <br />{" "}
          Ipsum minim minim fugiat ut sunt exercitation deserunt ex elit qui ea.
          Voluptate esse laborum irure minim sunt ullamco occaecat veniam sint
          sunt minim anim minim. Sit amet amet et pariatur id minim incididunt
          ea reprehenderit. Ullamco mollit sint magna adipisicing duis culpa
          tempor. Consectetur mollit sit ipsum sit consequat fugiat. Velit
          nostrud voluptate veniam anim excepteur magna enim incididunt nostrud
          incididunt cillum ad nisi. Fugiat voluptate do pariatur incididunt in
          sunt irure qui. <br /> <br /> Consequat fugiat nostrud officia et.
          Nostrud Lorem labore esse ut occaecat sunt. Deserunt Lorem velit in
          consectetur. Velit cupidatat sunt tempor eiusmod Lorem cupidatat.
          Dolor exercitation consequat irure consectetur irure nostrud duis
          officia fugiat. Amet cillum adipisicing excepteur culpa velit
          adipisicing pariatur excepteur consectetur labore cupidatat fugiat
          pariatur. Excepteur exercitation pariatur aute ullamco cillum ex in.
          Enim sunt dolor reprehenderit ea reprehenderit deserunt cupidatat
          ullamco est sit eiusmod adipisicing ullamco. Qui duis culpa do dolore
          sint ipsum incididunt adipisicing non deserunt proident velit.
          Voluptate exercitation amet magna ea deserunt elit minim nulla.
          Ullamco adipisicing commodo enim dolor aliqua commodo aute consequat
          consectetur cupidatat. Commodo nisi aliqua do qui. Sint mollit ea
          culpa dolor minim aliquip qui magna anim ut quis nostrud cupidatat
          enim. Commodo occaecat dolor non deserunt ea.{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
