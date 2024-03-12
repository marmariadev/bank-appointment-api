import app from './app';
import { PORT } from './config/envs';

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});