const db = require('../models');
const Users = db.users;

const Activities = db.activities;

const Categories = db.categories;

const Contacts = db.contacts;

const Leads = db.leads;

const Notes = db.notes;

const Organizations = db.organizations;

const ActivitiesData = [
  {
    description: 'Sigmund Freud',

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Charles Sherrington',

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    description: 'Max Planck',

    start_date: new Date(),

    end_date: new Date(),

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const CategoriesData = [
  {
    name: 'Max Born',

    // type code here for "relation_one" field
  },

  {
    name: 'Edward O. Wilson',

    // type code here for "relation_one" field
  },

  {
    name: 'Christiaan Huygens',

    // type code here for "relation_one" field
  },
];

const ContactsData = [
  {
    first_name: 'Albert Einstein',

    last_name: 'Christiaan Huygens',

    email: 'Charles Sherrington',

    phone: 'Willard Libby',

    // type code here for "relation_one" field
  },

  {
    first_name: 'John Dalton',

    last_name: 'Werner Heisenberg',

    email: 'Rudolf Virchow',

    phone: 'Justus Liebig',

    // type code here for "relation_one" field
  },

  {
    first_name: 'William Herschel',

    last_name: 'Frederick Sanger',

    email: 'Galileo Galilei',

    phone: 'Paul Dirac',

    // type code here for "relation_one" field
  },
];

const LeadsData = [
  {
    name: 'Max Delbruck',

    status: 'Contacted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Francis Crick',

    status: 'Lost',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Tycho Brahe',

    status: 'New',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const NotesData = [
  {
    content: 'Arthur Eddington',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Ernst Mayr',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    content: 'Heike Kamerlingh Onnes',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const OrganizationsData = [
  {
    name: 'James Watson',
  },

  {
    name: 'August Kekule',
  },

  {
    name: 'Max Planck',
  },
];

// Similar logic for "relation_many"

async function associateUserWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User0 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (User0?.setOrganization) {
    await User0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User1 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (User1?.setOrganization) {
    await User1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const User2 = await Users.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (User2?.setOrganization) {
    await User2.setOrganization(relatedOrganization2);
  }
}

async function associateActivityWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setLead) {
    await Activity0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setLead) {
    await Activity1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setLead) {
    await Activity2.setLead(relatedLead2);
  }
}

async function associateActivityWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity0 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Activity0?.setOrganization) {
    await Activity0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity1 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Activity1?.setOrganization) {
    await Activity1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Activity2 = await Activities.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Activity2?.setOrganization) {
    await Activity2.setOrganization(relatedOrganization2);
  }
}

async function associateCategoryWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Category0 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Category0?.setOrganization) {
    await Category0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Category1 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Category1?.setOrganization) {
    await Category1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Category2 = await Categories.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Category2?.setOrganization) {
    await Category2.setOrganization(relatedOrganization2);
  }
}

async function associateContactWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setOrganization) {
    await Contact0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setOrganization) {
    await Contact1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setOrganization) {
    await Contact2.setOrganization(relatedOrganization2);
  }
}

async function associateLeadWithCategory() {
  const relatedCategory0 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setCategory) {
    await Lead0.setCategory(relatedCategory0);
  }

  const relatedCategory1 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setCategory) {
    await Lead1.setCategory(relatedCategory1);
  }

  const relatedCategory2 = await Categories.findOne({
    offset: Math.floor(Math.random() * (await Categories.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setCategory) {
    await Lead2.setCategory(relatedCategory2);
  }
}

async function associateLeadWithContact() {
  const relatedContact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setContact) {
    await Lead0.setContact(relatedContact0);
  }

  const relatedContact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setContact) {
    await Lead1.setContact(relatedContact1);
  }

  const relatedContact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setContact) {
    await Lead2.setContact(relatedContact2);
  }
}

async function associateLeadWithOwner() {
  const relatedOwner0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOwner) {
    await Lead0.setOwner(relatedOwner0);
  }

  const relatedOwner1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOwner) {
    await Lead1.setOwner(relatedOwner1);
  }

  const relatedOwner2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOwner) {
    await Lead2.setOwner(relatedOwner2);
  }
}

async function associateLeadWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead0 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Lead0?.setOrganization) {
    await Lead0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead1 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Lead1?.setOrganization) {
    await Lead1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Lead2 = await Leads.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Lead2?.setOrganization) {
    await Lead2.setOrganization(relatedOrganization2);
  }
}

async function associateNoteWithLead() {
  const relatedLead0 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setLead) {
    await Note0.setLead(relatedLead0);
  }

  const relatedLead1 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setLead) {
    await Note1.setLead(relatedLead1);
  }

  const relatedLead2 = await Leads.findOne({
    offset: Math.floor(Math.random() * (await Leads.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setLead) {
    await Note2.setLead(relatedLead2);
  }
}

async function associateNoteWithUser() {
  const relatedUser0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setUser) {
    await Note0.setUser(relatedUser0);
  }

  const relatedUser1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setUser) {
    await Note1.setUser(relatedUser1);
  }

  const relatedUser2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setUser) {
    await Note2.setUser(relatedUser2);
  }
}

async function associateNoteWithOrganization() {
  const relatedOrganization0 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note0 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Note0?.setOrganization) {
    await Note0.setOrganization(relatedOrganization0);
  }

  const relatedOrganization1 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note1 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Note1?.setOrganization) {
    await Note1.setOrganization(relatedOrganization1);
  }

  const relatedOrganization2 = await Organizations.findOne({
    offset: Math.floor(Math.random() * (await Organizations.count())),
  });
  const Note2 = await Notes.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Note2?.setOrganization) {
    await Note2.setOrganization(relatedOrganization2);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Activities.bulkCreate(ActivitiesData);

    await Categories.bulkCreate(CategoriesData);

    await Contacts.bulkCreate(ContactsData);

    await Leads.bulkCreate(LeadsData);

    await Notes.bulkCreate(NotesData);

    await Organizations.bulkCreate(OrganizationsData);

    await Promise.all([
      // Similar logic for "relation_many"

      await associateUserWithOrganization(),

      await associateActivityWithLead(),

      await associateActivityWithOrganization(),

      await associateCategoryWithOrganization(),

      await associateContactWithOrganization(),

      await associateLeadWithCategory(),

      await associateLeadWithContact(),

      await associateLeadWithOwner(),

      await associateLeadWithOrganization(),

      await associateNoteWithLead(),

      await associateNoteWithUser(),

      await associateNoteWithOrganization(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('activities', null, {});

    await queryInterface.bulkDelete('categories', null, {});

    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('leads', null, {});

    await queryInterface.bulkDelete('notes', null, {});

    await queryInterface.bulkDelete('organizations', null, {});
  },
};
