package test.m.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping(value={"/", "/home"})
	public String userHome(Model model) {
		model.addAttribute("userClickHome", true);
		return "index";
	}
	
	@RequestMapping(value="/about")
	public String about(Model model) {
		model.addAttribute("userClickAbout", true);
		return "index";
	}
}
