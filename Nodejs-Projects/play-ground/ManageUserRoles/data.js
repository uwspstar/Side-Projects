const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }
  
  module.exports = {
    ROLE: ROLE,
    users: [
      { id: 1, name: 'zing', role: ROLE.ADMIN },
      { id: 2, name: 'allen', role: ROLE.BASIC },
      { id: 3, name: 'aimee', role: ROLE.BASIC }
    ],
    projects: [
      { id: 1, name: "zing's Project", userId: 1 },
      { id: 2, name: "allen's Project", userId: 2 },
      { id: 3, name: "aimee's Project", userId: 3 }
    ]
  }