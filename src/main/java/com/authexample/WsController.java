package com.authexample;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * Created by juancho on 05/01/2017.
 */
@RestController
public class WsController {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/resource")
    public Map<String,Object> home() {
        Map<String,Object> model = new HashMap<String,Object>();
        model.put("id", UUID.randomUUID().toString());
        model.put("content", "Hello World");
        return model;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping("/user")
    public Principal user(Principal user) {
        return user;
    }
}
