package constellation.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wordnik.swagger.annotations.ApiOperation;

import constellation.dto.PersonCreate;

import java.util.ArrayList;
import java.util.List;

import constellation.dto.SourceFile;

import constellation.dto.SourceVideo;

@RestController
public class SourceController {
	
	@RequestMapping(method=RequestMethod.GET,value="constellation/source/create")
	@ApiOperation(httpMethod="GET",value="Select file or video for source input.")
	public int create(@RequestParam(value="fid", required=false, defaultValue="0") int fileId,
			@RequestParam(value="vid", required=false, defaultValue="0") int videoId) throws Exception
	{
		//TODO:save creating results to somewhere.
		return fileId+videoId;
	}
	@RequestMapping(method=RequestMethod.GET,value="constellation/source/files")
	@ApiOperation(httpMethod="GET",value="Get list of files.")
	public List<SourceFile> files(){
		List<SourceFile> files = new ArrayList<SourceFile>();
		//TODO:dynamic listing files.
		files.add(new SourceFile());
        return files;
	}
	@RequestMapping(method=RequestMethod.GET,value="constellation/source/videos")
	@ApiOperation(httpMethod="GET",value="Get list of videos.")
	public List<SourceVideo> videos(){
		List<SourceVideo> videos = new ArrayList<SourceVideo>();
		//TODO:dynamic listing videos.
		videos.add(new SourceVideo());
        return videos;
	}
	
}
