import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const LocationInput = props => {
  return (
    <FormControl style={{ minWidth: 170 }}>
      <InputLabel shrink htmlFor="location-native-simple">
        Where?
      </InputLabel>
      <NativeSelect
        value={null}
        onChange={() => {}}
        inputProps={{
          name: 'location',
          id: 'location-native-simple'
        }}
      >
        <option value="asia">Asia</option>
        <option value="africa">Africa</option>
        <option value="europa">Europa</option>
        <option value="america">America</option>
      </NativeSelect>
    </FormControl>
  );
};

export default LocationInput;
