package constellation;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.charset.Charset;
import java.util.ArrayList;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.wordnik.swagger.annotations.ApiOperation;

import constellation.dto.Person;

import com.facepp.error.FaceppParseException;
import com.facepp.http.HttpRequests;
import com.facepp.http.PostParameters;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import constellation.ApiConsts;

@RestController
public class PersonController {
	@RequestMapping(method=RequestMethod.GET,value="constellation/person")
	@ApiOperation(httpMethod="GET",value="Retrieve information of a person, including name, id, tag, faces assigned to the person, and groups that the person belongs to.")
	public Person get() throws Exception
	{
		ObjectMapper mapper = new ObjectMapper();
		Person person = null;
		// Load the directory as a resource
		URL dir_url = ClassLoader.getSystemResource("person.json");
		person = mapper.readValue(new File(dir_url.toURI()), Person.class);
		return person;
		//
		/*
		HttpRequests httpRequests = new HttpRequests(ApiConsts.API_KEY_FACEPP, ApiConsts.API_SECRET_FACEPP, true, true);
		
		JSONObject result = null;
		
		try {
			
			System.out.println(Charset.forName("UTF-8").name());
		
			System.out.println("FacePlusPlus API Test:");
			
			//detection/detect
			result = httpRequests.detectionDetect(new PostParameters().setUrl("http://cn.faceplusplus.com/wp-content/themes/faceplusplus/assets/img/demo/9.jpg"));
			System.out.println(result);
			
			System.out.println(result.getJSONArray("face").getJSONObject(0).getJSONObject("position").getJSONObject("center"));
			
			//-----------------Person-----------------
			//person/create
			System.out.println("\nperson/create");
//			for (int i = 0; i < result.getJSONArray("face").length(); ++i)
			for (int i = 0; i < 1; ++i)	
			{
				person = mapper.readValue(httpRequests.personCreate(new PostParameters().setPersonName("person_"+i)).toString(), Person.class);
//				System.out.println(httpRequests.personCreate(new PostParameters().setPersonName("person_"+i)));
				System.out.println(person);
			}
		} catch(FaceppParseException e) {
			e.printStackTrace();
		} catch (Exception e) {
		} finally {
			try {
				for (int i = 1; i < result.getJSONArray("face").length(); ++i) {
					httpRequests.personDelete(new PostParameters().setPersonName("person_"+i));
					httpRequests.facesetDelete(new PostParameters().setFacesetName("faceset_"+i));
				}
			} catch (JSONException e) {
				e.printStackTrace();
			} catch (FaceppParseException e) {
				e.printStackTrace();
			}
		}
		return person;
		*/
	}
}
