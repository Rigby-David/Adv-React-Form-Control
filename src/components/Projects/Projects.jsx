import { 
  CheckboxControl,
  FormButton,
  InputControl,
  SelectControl,
  TextAreaControl 
} from './Forms/FormControl';
import styles from './Projects.css';

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <form>
        <InputControl
          label="Email"
          name="email"
          placeholder="Email"
        />
        <InputControl
          label="Password"
          name="password"
          placeholder="Password"
        />

        <SelectControl
          label="Select"
          placeholder="Make your choice"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">stuff</option>
        </SelectControl>

        <TextAreaControl
          label="Journal Entry"
          placeholder="how are you feeling today?"
        />

        <CheckboxControl
          legend="Hungry?"
          label="Yes"
        />

        <FormButton text="Submit"/>
      </form>
      
      {/* <CheckboxControl legend="Do you accept?" label="Yes" /> */}

    </div>

  );
}
