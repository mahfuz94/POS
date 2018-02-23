package test.m.pos.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import test.m.pos.dto.Supplier;

@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping(value={"/", "/home"})
	public String userHome(Model model) {
		model.addAttribute("userClickHome", true);
		return "index";
	}
	
	@RequestMapping(value="/setup")
	public String about(Model model, @RequestParam(name="message", required=false) String message) {
		model.addAttribute("userClickAbout", true);
		model.addAttribute("supplier", new Supplier());
		model.addAttribute("message", message);
		return "index";
	}
}
