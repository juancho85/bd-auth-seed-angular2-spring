package com.authexample;

import org.springframework.boot.autoconfigure.jdbc.DataSourceBuilder;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import javax.sql.DataSource;

/**
 * Created by juancho on 07/01/2017.
 */
@Configuration
public class MySqlDataSource {

    @Bean
    @ConfigurationProperties(prefix = "mysql.local.datasource")
    public DataSource dataSource() {
        return DataSourceBuilder
                .create()
                .build();
    }
}
