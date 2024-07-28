public with sharing class MessageController {
    @AuraEnabled
    public static String sayHello() {
        return 'Hello, Salesforce!';
    }
}