import InfoBlockCard from "../../../components/infoBlock/InfoBlock";
export default function HomePageBenefits() {
  return (
    <div>
      <div style={{ paddingBottom: 103 }}>
        <p
          style={{
            textAlign: "center",
            fontSize: 36,
            fontWeight: 600,
            paddingBottom: 20,
          }}
        >
          <b style={{ color: "#2F327D" }}>All-In-One</b>
          <b style={{ color: "#00CBB8" }}> Cloud Software.</b>
        </p>
        <p style={{ textAlign: "center", color: "#696984" }}>
          TOTC is one powerful online software suite that combines all the tools
          <br />
          needed to run a successful school or office.
        </p>
      </div>
      <div style={{ paddingBottom: 152 }} className="home-page__info-block">
        <InfoBlockCard
          imgHeight={46}
          imgWidth={33}
          img="/src/assets/icons/file.png"
          imgColor="#5b72ee"
          infoBlockTitle="Online Billing, Invoicing, & Contracts"
          infoBlockText="Simple and secure control of your organization’s financial and legal
                transactions. Send customized invoices and contracts"
        ></InfoBlockCard>
        <InfoBlockCard
          imgHeight={48}
          imgWidth={48}
          img="/src/assets/icons/calendar.png"
          imgColor="#00CBB8"
          infoBlockTitle="Easy Scheduling & Attendance Tracking"
          infoBlockText="Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
        ></InfoBlockCard>
        <InfoBlockCard
          imgHeight={38.5}
          imgWidth={55}
          img="/src/assets/icons/users.png"
          imgColor="#29B9E7"
          infoBlockTitle="Customer Tracking"
          infoBlockText="Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization "
        ></InfoBlockCard>
      </div>
    </div>
  );
}
