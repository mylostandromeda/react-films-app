import React from 'react';
import './Filter.scss';
import {useSelector, useDispatch} from 'react-redux';
import {Layout,Select,Button,Form} from 'antd';
import {clearFilter, setFilter} from "../../store/actions/films/films";

const Filter = () => {
    const {Sider} = Layout;
    const {Option} = Select;
    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const {filters} = useSelector(state => state.films);

    const onFilter = (formData) => {
        dispatch(setFilter(formData));
    };

    const onFilterClear = () => {
        dispatch(clearFilter());
        form.setFieldsValue({
            genres: null,
            language: null,
            "network.country.name": null,
            status: null,
            type: null,
            sort: "rating.average DESC"
        });
    }
    return (
      <Sider className="filter">
          <Form
              form={form}
              initialValues={filters}
              onFinish={onFilter}
          >
              <Form.Item
                  name="sort"
                  label="Sort by"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="rating.average DESC">Most popular</Option>
                      <Option value="rating.average ASC">Least popular</Option>
                      <Option value="name ASC">A to Z</Option>
                      <Option value="name DESC">Z to A</Option>
                      <Option value="premiered DESC">Most recently added</Option>
                      <Option value="premiered ASC">Least recently added</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="status"
                  label="Status"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="Running">Running</Option>
                      <Option value="Ended">Ended</Option>
                      <Option value="To Be Determined">To Be Determined</Option>
                      <Option value="In Development">In Development</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="type"
                  label="Type"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="Scripted">Scripted</Option>
                      <Option value="Animation">Animation</Option>
                      <Option value="Reality">Reality</Option>
                      <Option value="Talk Show">Talk Show</Option>
                      <Option value="Documentary">Documentary</Option>
                      <Option value="Game Show">Game Show</Option>
                      <Option value="News">News</Option>
                      <Option value="Sports">Sports</Option>
                      <Option value="Variety">Variety</Option>
                      <Option value="Award Show">Award Show</Option>
                      <Option value="Panel Show">Panel Show</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="genres"
                  label="Genre"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="Action">Action</Option>
                      <Option value="Adult">Adult</Option>
                      <Option value="Adventure">Adventure</Option>
                      <Option value="Anime">Anime</Option>
                      <Option value="Children">Children</Option>
                      <Option value="Comedy">Comedy</Option>
                      <Option value="Crime">Crime</Option>
                      <Option value="DIY">DIY</Option>
                      <Option value="Drama">Drama</Option>
                      <Option value="Espionage">Espionage</Option>
                      <Option value="Family">Family</Option>
                      <Option value="Fantasy">Fantasy</Option>
                      <Option value="Food">Food</Option>
                      <Option value="History">History</Option>
                      <Option value="Horror">Horror</Option>
                      <Option value="Legal">Legal</Option>
                      <Option value="Medical">Medical</Option>
                      <Option value="Music">Music</Option>
                      <Option value="Mystery">Mystery</Option>
                      <Option value="Nature">Nature</Option>
                      <Option value="Romance">Romance</Option>
                      <Option value="Science-Fiction">Science-Fiction</Option>
                      <Option value="Sports">Sports</Option>
                      <Option value="Supernatural">Supernatural</Option>
                      <Option value="Thriller">Thriller</Option>
                      <Option value="Travel">Travel</Option>
                      <Option value="War">War</Option>
                      <Option value="Western">Western</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="language"
                  label="Language"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="Afrikaans">Afrikaans</Option>
                      <Option value="Albanian">Albanian</Option>
                      <Option value="Arabic">Arabic</Option>
                      <Option value="Armenian">Armenian</Option>
                      <Option value="Azerbaijani">Azerbaijani</Option>
                      <Option value="Basque">Basque</Option>
                      <Option value="Belarusian">Belarusian</Option>
                      <Option value="Bengali">Bengali</Option>
                      <Option value="Bosnian">Bosnian</Option>
                      <Option value="Bulgarian">Bulgarian</Option>
                      <Option value="Catalan">Catalan</Option>
                      <Option value="Chechen">Chechen</Option>
                      <Option value="Chinese">Chinese</Option>
                      <Option value="Croatian">Croatian</Option>
                      <Option value="Czech">Czech</Option>
                      <Option value="Danish">Danish</Option>
                      <Option value="Divehi">Divehi</Option>
                      <Option value="Dutch">Dutch</Option>
                      <Option value="English">English</Option>
                      <Option value="Estonian">Estonian</Option>
                      <Option value="Finnish">Finnish</Option>
                      <Option value="French">French</Option>
                      <Option value="Galician">Galician</Option>
                      <Option value="Georgian">Georgian</Option>
                      <Option value="German">German</Option>
                      <Option value="Greek">Greek</Option>
                      <Option value="Hebrew">Hebrew</Option>
                      <Option value="Hindi">Hindi</Option>
                      <Option value="Hungarian">Hungarian</Option>
                      <Option value="Icelandic">Icelandic</Option>
                      <Option value="Indonesian">Indonesian</Option>
                      <Option value="Irish">Irish</Option>
                      <Option value="Italian">Italian</Option>
                      <Option value="Japanese">Japanese</Option>
                      <Option value="Javanese">Javanese</Option>
                      <Option value="Kannada">Kannada</Option>
                      <Option value="Kazakh">Kazakh</Option>
                      <Option value="Kongo">Kongo</Option>
                      <Option value="Korean">Korean</Option>
                      <Option value="Latin">Latin</Option>
                      <Option value="Latvian">Latvian</Option>
                      <Option value="Lithuanian">Lithuanian</Option>
                      <Option value="Luxembourgish">Luxembourgish</Option>
                      <Option value="Malay">Malay</Option>
                      <Option value="Malayalam">Malayalam</Option>
                      <Option value="Marathi">Marathi</Option>
                      <Option value="Mongolian">Mongolian</Option>
                      <Option value="Norwegian">Norwegian</Option>
                      <Option value="Panjabi">Panjabi</Option>
                      <Option value="Pashto">Pashto</Option>
                      <Option value="Persian">Persian</Option>
                      <Option value="Polish">Polish</Option>
                      <Option value="Portuguese">Portuguese</Option>
                      <Option value="Romanian">Romanian</Option>
                      <Option value="Russian">Russian</Option>
                      <Option value="Serbian">Serbian</Option>
                      <Option value="Sinhalese">Sinhalese</Option>
                      <Option value="Slovak">Slovak</Option>
                      <Option value="Slovenian">Slovenian</Option>
                      <Option value="Spanish">Spanish</Option>
                      <Option value="Swedish">Swedish</Option>
                      <Option value="Tagalog">Tagalog</Option>
                      <Option value="Tamil">Tamil</Option>
                      <Option value="Telugu">Telugu</Option>
                      <Option value="Thai">Thai</Option>
                      <Option value="Turkish">Turkish</Option>
                      <Option value="Ukrainian">Ukrainian</Option>
                      <Option value="Urdu">Urdu</Option>
                      <Option value="Uzbek">Uzbek</Option>
                      <Option value="Vietnamese">Vietnamese</Option>
                      <Option value="Welsh">Welsh</Option>
                      <Option value="Scottish Gaelic">Scottish Gaelic</Option>
                  </Select>
              </Form.Item>
              <Form.Item
                  name="network.country.name"
                  label="Country"
                  className="filter__section"
              >
                  <Select className="filter__select">
                      <Option value="Afghanistan">Afghanistan</Option>
                      <Option value="Albania">Albania</Option>
                      <Option value="Algeria">Algeria</Option>
                      <Option value="Argentina">Argentina</Option>
                      <Option value="Armenia">Armenia</Option>
                      <Option value="Australia">Australia</Option>
                      <Option value="Austria">Austria</Option>
                      <Option value="Azerbaijan">Azerbaijan</Option>
                      <Option value="Belarus">Belarus</Option>
                      <Option value="Belgium">Belgium</Option>
                      <Option value="Bosnia and Herzegovina">Bosnia and Herzegovina</Option>
                      <Option value="Brazil">Brazil</Option>
                      <Option value="Bulgaria">Bulgaria</Option>
                      <Option value="Canada">Canada</Option>
                      <Option value="Chile">Chile</Option>
                      <Option value="China">China</Option>
                      <Option value="Colombia">Colombia</Option>
                      <Option value="Croatia">Croatia</Option>
                      <Option value="Cyprus">Cyprus</Option>
                      <Option value="Czech Republic">Czech Republic</Option>
                      <Option value="Denmark">Denmark</Option>
                      <Option value="Egypt">Egypt</Option>
                      <Option value="Estonia">Estonia</Option>
                      <Option value="Faroe Islands">Faroe Islands</Option>
                      <Option value="Finland">Finland</Option>
                      <Option value="France">France</Option>
                      <Option value="French Polynesia">French Polynesia</Option>
                      <Option value="Georgia">Georgia</Option>
                      <Option value="Germany">Germany</Option>
                      <Option value="Greece">Greece</Option>
                      <Option value="Hong Kong">Hong Kong</Option>
                      <Option value="Hungary">Hungary</Option>
                      <Option value="Iceland">Iceland</Option>
                      <Option value="India">India</Option>
                      <Option value="Indonesia">Indonesia</Option>
                      <Option value="Iran, Islamic Republic of">Iran, Islamic Republic of</Option>
                      <Option value="Iraq">Iraq</Option>
                      <Option value="Ireland">Ireland</Option>
                      <Option value="Israel">Israel</Option>
                      <Option value="Italy">Italy</Option>
                      <Option value="Japan">Japan</Option>
                      <Option value="Kazakhstan">Kazakhstan</Option>
                      <Option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</Option>
                      <Option value="Korea, Republic of">Korea, Republic of</Option>
                      <Option value="Latvia">Latvia</Option>
                      <Option value="Lebanon">Lebanon</Option>
                      <Option value="Lithuania">Lithuania</Option>
                      <Option value="Luxembourg">Luxembourg</Option>
                      <Option value="Malaysia">Malaysia</Option>
                      <Option value="Maldives">Maldives</Option>
                      <Option value="Mexico">Mexico</Option>
                      <Option value="Moldova, Republic of">Moldova, Republic of</Option>
                      <Option value="Mongolia">Mongolia</Option>
                      <Option value="Netherlands">Netherlands</Option>
                      <Option value="New Zealand">New Zealand</Option>
                      <Option value="Nigeria">Nigeria</Option>
                      <Option value="Norway">Norway</Option>
                      <Option value="Pakistan">Pakistan</Option>
                      <Option value="Peru">Peru</Option>
                      <Option value="Philippines">Philippines</Option>
                      <Option value="Poland">Poland</Option>
                      <Option value="Portugal">Portugal</Option>
                      <Option value="Puerto Rico">Puerto Rico</Option>
                      <Option value="Qatar">Qatar</Option>
                      <Option value="Romania">Romania</Option>
                      <Option value="Russian Federation">Russian Federation</Option>
                      <Option value="Saudi Arabia">Saudi Arabia</Option>
                      <Option value="Serbia">Serbia</Option>
                      <Option value="Singapore">Singapore</Option>
                      <Option value="Slovakia">Slovakia</Option>
                      <Option value="Slovenia">Slovenia</Option>
                      <Option value="South Africa">South Africa</Option>
                      <Option value="Spain">Spain</Option>
                      <Option value="Sri Lanka">Sri Lanka</Option>
                      <Option value="Sweden">Sweden</Option>
                      <Option value="Switzerland">Switzerland</Option>
                      <Option value="Taiwan, Province of China">Taiwan, Province of China</Option>
                      <Option value="Thailand">Thailand</Option>
                      <Option value="Trinidad and Tobago">Trinidad and Tobago</Option>
                      <Option value="Tunisia">Tunisia</Option>
                      <Option value="Turkey">Turkey</Option>
                      <Option value="Ukraine">Ukraine</Option>
                      <Option value="United Arab Emirates">United Arab Emirates</Option>
                      <Option value="United Kingdom">United Kingdom</Option>
                      <Option value="United States">United States</Option>
                      <Option value="Uzbekistan">Uzbekistan</Option>
                      <Option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</Option>
                      <Option value="Viet Nam">Viet Nam</Option>
                  </Select>
              </Form.Item>
              <Form.Item className="filter__buttons">
                  <Button type="primary" htmlType="submit">
                      Filter
                  </Button>
                  <Button type="default" onClick={onFilterClear}>
                      Clear filter
                  </Button>
              </Form.Item>
          </Form>
      </Sider>
    );
};

export default Filter;
