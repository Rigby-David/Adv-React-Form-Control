import styles from './Projects.css';

export default function Projects() {
  return (
    <div className={styles.Projects}>
      <form>

        <label>
          Email
          <input name="email" placeholder="Email" />
        </label>

        <label>
          Password
          <input name="password" placeholder="Password" />
        </label>

        <label>
          <br/>
          Favorite food
          <br/>
          <input name="food" type="radio" />
          <label>Pizza</label><br/>
          <input name="food" type="radio" />
          <label>Ice Cream</label><br/>
          <input name="food" type="radio" />
          <label>Popcorn</label><br/>
          
        </label>

        <label>
          Select
          <select>
            <option disabled selected value="">Make your choice</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">stuff</option>
          </select>
        </label>

        <label>
          Journal Entry
          <textarea placeholder="how are you feeling today?"></textarea>
        </label>

        <label>
          Hungry?
          <input name="checkbox" type="checkbox"></input>
        </label>

        <label>
          All done?
          <button>Submit</button>
        </label>
      </form>
      
    </div>

  );
}
