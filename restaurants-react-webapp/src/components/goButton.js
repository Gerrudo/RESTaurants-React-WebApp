function goButton() {
    return (
        <button type="button" class="btn btn-primary">Primary</button>
      )
    }

    export default goButton;

    ReactDOM.render(
        <React.StrictMode>
          <goButton />
        </React.StrictMode>,
        document.getElementById('root')
      );