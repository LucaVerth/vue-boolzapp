const app = new Vue({
  el: "#app",

  data: {
    contacts: [
      {
        name: "Michele",
        avatar: "assets/img/avatar_1.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Hai portato a spasso il cane?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Ricordati di dargli da mangiare",
            status: "sent",
          },
          {
            date: "10/01/2020 16:15:22",
            message: "Tutto fatto!",
            status: "received",
          },
        ],
      },
      {
        name: "Fabio",
        avatar: "assets/img/avatar_2.jpg",
        visible: true,
        messages: [
          {
            date: "20/03/2020 16:30:00",
            message: "Ciao come stai?",
            status: "sent",
          },
          {
            date: "20/03/2020 16:30:55",
            message: "Bene grazie! Stasera ci vediamo?",
            status: "received",
          },
          {
            date: "20/03/2020 16:35:00",
            message: "Mi piacerebbe ma devo andare a fare la spesa.",
            status: "received",
          },
        ],
      },
      {
        name: "Samuele",
        avatar: "assets/img/avatar_3.jpg",
        visible: true,
        messages: [
          {
            date: "28/03/2020 10:10:40",
            message: "La Marianna va in campagna",
            status: "received",
          },
          {
            date: "28/03/2020 10:20:10",
            message: "Sicuro di non aver sbagliato chat?",
            status: "sent",
          },
          {
            date: "28/03/2020 16:15:22",
            message: "Ah scusa!",
            status: "received",
          },
        ],
      },
      {
        name: "Luisa",
        avatar: "assets/img/avatar_4.jpg",
        visible: true,
        messages: [
          {
            date: "10/01/2020 15:30:55",
            message: "Lo sai che ha aperto una nuova pizzeria?",
            status: "sent",
          },
          {
            date: "10/01/2020 15:50:00",
            message: "Si, ma preferirei andare al cinema",
            status: "received",
          },
        ],
      },
    ],
    counter: 0,
    newMessage: "",
    searchName: "",
  },

  methods: {
    //function to sent a message to contact
    sendMessage(counter) {
      let messageSent = {
        date: timeStamp(),
        message: this.newMessage.trim(),
        status: "sent",
      };
      if (this.newMessage != "") {
        this.contacts[counter].messages.push(messageSent);
        this.newMessage = "";
        setTimeout(() => {
          let pcMessage = {
            date: timeStamp(),
            message: "Ok!",
            status: "received",
          };
          this.contacts[counter].messages.push(pcMessage);
        }, 2000);
      }
    },
    // function to make last message send appear in the contacts section
    lastMessageSent(index) {
      let shortMsg = "";
      let lastMessage =
        this.contacts[index].messages[this.contacts[index].messages.length - 1]
          .message;
      if (lastMessage.length < 12) {
        shortMsg = lastMessage;
      } else {
        shortMsg = lastMessage.substring(0, 12) + "...";
      }
      return shortMsg;
    },
    // search bar function, if the input string = contact name display relative contact
    filteredItems() {
      for (let contact of this.contacts) {
        if (
          !contact.name.toLowerCase().includes(this.searchName.toLowerCase())
        ) {
          contact.visible = false;
        }
        if (this.searchName === "") {
          contact.visible = true;
        }
      }
    },
  },
});

let timeStamp = () => new Date().toLocaleString().replace(",", "");
