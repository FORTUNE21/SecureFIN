import "./FaqForm.scss";
import { Accordion } from "../../../../ui";

function FaqForm() {
  const accordionItems = [
    {
      title: "Lorem ipsum dolor sit amet",
      content: (
        <div>
          For our recent trip to S.A. I booked several accommodation thru SA
          Places. I just wanted to tell you that everything worked out perfectly
          with all the bookings and also your booking was very quick and
          professional. I hope I have the opportunity to re-visit South Africa
          soon, I will then make my bookings with your company again. I will
          also recommend
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: (
        <div>
          For our recent trip to S.A. I booked several accommodation thru SA
          Places. I just wanted to tell you that everything worked out perfectly
          with all the bookings and also your booking was very quick and
          professional. I hope I have the opportunity to re-visit South Africa
          soon, I will then make my bookings with your company again. I will
          also recommend
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: (
        <div>
          For our recent trip to S.A. I booked several accommodation thru SA
          Places. I just wanted to tell you that everything worked out perfectly
          with all the bookings and also your booking was very quick and
          professional. I hope I have the opportunity to re-visit South Africa
          soon, I will then make my bookings with your company again. I will
          also recommend
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: (
        <div>
          For our recent trip to S.A. I booked several accommodation thru SA
          Places. I just wanted to tell you that everything worked out perfectly
          with all the bookings and also your booking was very quick and
          professional. I hope I have the opportunity to re-visit South Africa
          soon, I will then make my bookings with your company again. I will
          also recommend
        </div>
      ),
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: (
        <div>
          For our recent trip to S.A. I booked several accommodation thru SA
          Places. I just wanted to tell you that everything worked out perfectly
          with all the bookings and also your booking was very quick and
          professional. I hope I have the opportunity to re-visit South Africa
          soon, I will then make my bookings with your company again. I will
          also recommend
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="questions-form">
        <Accordion items={accordionItems} />
      </div>
    </>
  );
}

export default FaqForm;
