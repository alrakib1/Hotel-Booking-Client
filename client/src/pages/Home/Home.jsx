// import Swal from "sweetalert2";
import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {

  // testing popup with page reload and page onload


  // let alertShown = false;

  // const showAlert = () => {
  //   if (!alertShown) {
  //     Swal.fire({
  //       position: "bottom-end",
  //       title: "Sweet!",
  //       text: "Modal with a custom image.",
  //       imageUrl: "https://unsplash.it/400/200",
  //       imageWidth: 400,
  //       imageHeight: 200,
  //       imageAlt: "Custom image",
  //       showCancelButton: true,
  //       focusConfirm: false,
  //       confirmButtonText: `
  //   <i class="fa fa-thumbs-up"></i> Great!
  // `,
  //       confirmButtonAriaLabel: "Thumbs up, great!",
  //       cancelButtonText: `
  //   <i class="fa fa-thumbs-down">Cancel</i>
  // `,
  //       cancelButtonAriaLabel: "Thumbs down",
  //     });

  //     alertShown = true;
  //   }
  // };

  // setTimeout(() => {
  //   showAlert();
  // }, 4000);

  // if (performance.navigation.type === 1) {
  //   setTimeout(() => {
  //     showAlert();
  //   }, 4000);
  // } else {
  //   console.log("Page is not being reloaded");
  // }

  return (
    <div>
      <Categories />
      <Rooms />
    </div>
  );
};

export default Home;
