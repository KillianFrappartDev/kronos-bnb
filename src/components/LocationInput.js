import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import NativeSelect from "@material-ui/core/NativeSelect";

const LocationInput = (props) => {
  return (
    <FormControl style={{ minWidth: 170 }}>
      <InputLabel shrink htmlFor="location-native-simple">
        Where?
      </InputLabel>
      <NativeSelect
        value={props.value}
        onChange={props.change}
        inputProps={{
          name: "location",
          id: "location-native-simple",
        }}
      >
        <option value="Asia">Asia</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europe</option>
        <option value="America">America</option>
        <option value="Mars">Space</option>
      </NativeSelect>
    </FormControl>
  );
};

export default LocationInput;
