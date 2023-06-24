import Contacts from "../Contacts";
import SocialProfiles from "../SocialProfiles";
import Form from "../Form";

function index() {
  return (
    <main>
      <div className="md:flex my-5 md:gap-10 lg:gap-20">
        <div>
          <Contacts />
          <SocialProfiles />
        </div>
        <Form />
      </div>
    </main>
  );
}

export default index;
