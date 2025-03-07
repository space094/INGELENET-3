
import WorkLogForm from "../components/WorkLogForm";

export default function Home() {
  return (
    <div>
      <h1>Plataforma de Registro de Trabajos</h1>
      <WorkLogForm />
    </div>
  );
}
import { db, storage } from "./firebase.js";