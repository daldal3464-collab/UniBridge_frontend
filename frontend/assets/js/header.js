const roleMap = {
    mentor:  { label: '멘토', cls: 'mentor' },
    mentee:  { label: '멘티', cls: 'mentee' },
    pending: { label: '미정', cls: 'pending' },
  };
  
  let loggedIn = false;
  let currentRole = 'mentee';
  
  function setRole(role) {
    currentRole = role;
    const el = document.getElementById('userRole');
    el.textContent = roleMap[role].label;
    el.className = 'user-role ' + roleMap[role].cls;
  }
  