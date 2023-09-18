import Classes from "../sass/Contact.module.scss";

const ContactComponentPage = () => {
  return (
    <>
      <main className={Classes["contactComponentPage"]}>
        <div className={Classes["name"]}>
          <label htmlFor="name">Your Name</label>
          <input type="text" />
        </div>
        <div className={Classes["email"]}>
          <label htmlFor="email">Email</label>
          <input type="text" />
        </div>
        <div className={Classes["subject"]}>
          <label htmlFor="name">Subject</label>
          <input type="text" />
        </div>
        <div className={Classes["message"]}>
          <label htmlFor="message">Message</label>
          <textarea rows={6} placeholder="Type your Message Here" />
        </div>
      </main>
    </>
  );
};

export default ContactComponentPage;
