package constellation;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wordnik.swagger.annotations.ApiOperation;

import constellation.dto.PersonCreate;

@RestController
public class SourceController {
	
	@RequestMapping(method=RequestMethod.GET,value="constellation/source/create")
	@ApiOperation(httpMethod="GET",value="Select file or video for source input.")
	public int create(@RequestParam(value="fid", required=false, defaultValue="0") int fileId,
			@RequestParam(value="vid", required=false, defaultValue="0") int videoId) throws Exception
	{
		return fileId+videoId;
	}
	
	
}
