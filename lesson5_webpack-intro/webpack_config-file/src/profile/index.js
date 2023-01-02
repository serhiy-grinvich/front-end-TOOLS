// file path: src/profile/index.js

import { fetchUser } from './gateway.js';
import printProfile from './printProfile.js';

fetchUser('github').then(({ name, location }) =>
  printProfile({
    name,
    location,
  })
);
